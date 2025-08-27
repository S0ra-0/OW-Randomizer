import { overwatchHeroes } from './overwatch_heroes.js';

document.addEventListener('DOMContentLoaded', () => {
    // Extract hero name from the URL path (e.g., 'ana' from '.../ana.html')
    const pathParts = window.location.pathname.split('/');
    const heroFileName = pathParts[pathParts.length - 1]; // Get the filename part
    const heroName = heroFileName.replace('.html', '').replace(/-/g, ' ');
    
    // Simple function to normalize hero names for comparison
    function normalizeName(name) {
        return name.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    const heroData = overwatchHeroes.all().find(h => 
        normalizeName(h.name) === normalizeName(heroName)
    );

    if (!heroData) {
        // Handle case where hero data is not found
        document.body.innerHTML = `<h1>Hero '${heroName}' not found.</h1>`;
        return;
    }

    // --- Populate Hero Header ---
    document.title = `${heroData.name} - Overwatch Hub`;
    document.getElementById('hero-name').textContent = heroData.name;
    document.querySelector('.hero-main-image').src = heroData.image;
    document.querySelector('.hero-main-image').alt = heroData.name;
    
    const roleEl = document.getElementById('hero-role');
    roleEl.textContent = heroData.role;
    roleEl.className = `meta-item role-${heroData.role.toLowerCase()}`;

    // Only set location if it hasn't been manually edited
    const locationEl = document.getElementById('hero-location');
    if (locationEl.textContent.includes('LOCATION_PLACEHOLDER') || locationEl.textContent.includes('TBA')) {
        locationEl.textContent = `Base: ${heroData.base_of_operations || 'TBA'}`;
    }
    // Only set release date if it hasn't been manually edited
    const dateEl = document.getElementById('hero-release-date');
    if (dateEl.textContent.includes('RELEASE_DATE_PLACEHOLDER') || dateEl.textContent.includes('TBA')) {
        dateEl.textContent = `Released: ${heroData.release_date || 'TBA'}`;
    }
    
    // Only set birthday if it hasn't been manually edited
    const birthdayEl = document.getElementById('hero-birthday');
    if (birthdayEl && (birthdayEl.textContent.includes('BIRTHDAY_PLACEHOLDER') || birthdayEl.textContent.includes('TBA'))) {
        birthdayEl.textContent = `Birthday: ${heroData.birthday || 'TBA'}`;
    }

    // --- Populate Backstory ---
    const backstoryEl = document.getElementById('hero-backstory');
    if (backstoryEl && (backstoryEl.textContent.includes('BACKSTORY_PLACEHOLDER') || backstoryEl.textContent.trim() === '')) {
        backstoryEl.innerHTML = heroData.backstory || heroData.description || 'No backstory available.';
    }
    // You might want a specific backstory image per hero later
    // document.getElementById('backstory-image').src = `../img/backstory/${heroData.name.toLowerCase()}.png`;

    // --- Populate Abilities ---
    const abilities = heroData.abilities || [];
    const abilityIconsContainer = document.getElementById('ability-icons');
    const abilityVideo = document.getElementById('ability-video');
    const abilityName = document.getElementById('ability-name');
    const abilityDescription = document.getElementById('ability-description');

    if (abilityIconsContainer && abilityVideo && abilityName && abilityDescription) {
        // Clear any placeholder buttons
        abilityIconsContainer.innerHTML = '';

        // Function to get ability ID for URL
        function getAbilityId(ability) {
            return ability.name.toLowerCase()
                .replace(/'/g, '')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }

        // Function to update ability display
        function selectAbility(index) {
            const ability = heroData.abilities[index];
            if (!ability) return false;

            // Update active state
            document.querySelectorAll('.ability-icon-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            const activeButton = document.querySelector(`.ability-icon-btn[data-ability-index="${index}"]`);
            if (activeButton) {
                activeButton.classList.add('active');
                activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }

            // Update ability details
            abilityName.textContent = ability.name;
            abilityDescription.innerHTML = ability.description;
            
            // Add click handler for internal links to close modal
            abilityDescription.querySelectorAll('a[href^="#"]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const modal = document.getElementById('ability-modal');
                    if (modal && modal.style.display === 'block') {
                        // Hide modal immediately
                        modal.style.display = 'none';
                        document.body.style.overflow = '';
                        
                        // Scroll to target after a small delay
                        setTimeout(() => {
                            const targetElement = document.querySelector(targetId);
                            if (targetElement) {
                                targetElement.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 10);
                    } else {
                        // If modal is not open, just follow the link
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                });
            });
            
            // Update video source
            if (ability.video) {
                abilityVideo.src = ability.video;
                abilityVideo.load();
                abilityVideo.play().catch(e => console.log('Autoplay prevented:', e));
            }
            
            // Add or update More Info button
            let moreInfoBtn = abilityDescription.nextElementSibling;
            if (!moreInfoBtn || !moreInfoBtn.classList.contains('more-details-btn')) {
                moreInfoBtn = document.createElement('button');
                moreInfoBtn.className = 'more-details-btn';
                moreInfoBtn.textContent = 'More Info';
                abilityDescription.parentNode.insertBefore(moreInfoBtn, abilityDescription.nextSibling);
            }
            
            // Update click handler for the current ability
            moreInfoBtn.onclick = () => showAbilityDetails(ability);

            // Update URL with ability ID
            const abilityId = getAbilityId(ability);
            if (window.location.hash !== `#${abilityId}`) {
                history.replaceState(null, '', `#${abilityId}`);
            }

            return true;
        }

        // Function to handle hash changes
        function handleHashChange() {
            const hash = window.location.hash.substring(1);
            if (!hash) return;

            // Find ability with matching ID
            const abilityIndex = heroData.abilities.findIndex(ability => {
                return getAbilityId(ability) === hash.toLowerCase();
            });

            if (abilityIndex !== -1) {
                selectAbility(abilityIndex);
            }
        }

        // Create ability icons
        heroData.abilities.forEach((ability, index) => {
            const abilityId = getAbilityId(ability);
            const button = document.createElement('button');
            button.className = 'ability-icon-btn';
            button.setAttribute('data-ability-index', index);
            button.setAttribute('data-ability-name', ability.name);
            button.setAttribute('title', ability.name);
            button.id = `ability-${abilityId}`;
            
            const img = document.createElement('img');
            img.src = ability.icon || '../img/heroes/icons/placeholder.png';
            img.alt = ability.name;
            
            button.appendChild(img);
            abilityIconsContainer.appendChild(button);
        });

        // Event listener for icon clicks
        abilityIconsContainer.addEventListener('click', (e) => {
            const button = e.target.closest('.ability-icon-btn');
            if (button && button.dataset.abilityIndex) {
                const index = parseInt(button.dataset.abilityIndex);
                selectAbility(index);
            }
        });

        // Handle initial load with hash
        if (window.location.hash) {
            handleHashChange();
        } else if (heroData.abilities.length > 0) {
            // Default to first ability if no hash
            selectAbility(0);
        }

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
    } else {
        // Hide the abilities section if no data is available
        document.querySelector('.abilities-section').style.display = 'none';
    }
    
    // Create modal element if it doesn't exist
    if (!document.getElementById('ability-modal')) {
        const modal = document.createElement('div');
        modal.id = 'ability-modal';
        modal.className = 'ability-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2 class="modal-ability-name"></h2>
                <div class="ability-stats"></div>
                <div class="ability-notes"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Store the modal reference globally for easy access
        window.currentModal = modal;
        
        // Close modal when clicking the X
        const closeButton = modal.querySelector('.close-modal');
        closeButton.onclick = (e) => {
            e.stopPropagation();
            closeModal(modal);
        };
        
        // Close modal when clicking outside content
        const modalContent = modal.querySelector('.modal-content');
        modal.onclick = (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        };
        
        // Prevent clicks inside modal content from closing the modal
        modalContent.onclick = (e) => {
            e.stopPropagation();
        };
        
        // Close modal when pressing Escape key
        const handleEscape = (event) => {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                closeModal(modal);
            }
        };
        document.addEventListener('keydown', handleEscape);
        
        // Clean up event listeners when modal is closed
        modal._cleanup = () => {
            document.removeEventListener('keydown', handleEscape);
        };
        
        // Function to handle modal close
        function closeModal(modalElement) {
            if (!modalElement) return;
            
            // Call cleanup if it exists
            if (typeof modalElement._cleanup === 'function') {
                modalElement._cleanup();
            }
            
            // Hide the modal
            modalElement.style.display = 'none';
            document.body.style.overflow = '';
            
            // Clear the global reference
            if (window.currentModal === modalElement) {
                window.currentModal = null;
            }
        }
    }
    
    // Function to show detailed ability information in modal
    function showAbilityDetails(ability) {
        const modal = document.getElementById('ability-modal');
        if (!modal) return;
        
        // Set ability name
        modal.querySelector('.modal-ability-name').textContent = ability.name;
        
        // Set ability stats if available
        const statsEl = modal.querySelector('.ability-stats');
        if (ability.stats && Object.keys(ability.stats).length > 0) {
            statsEl.innerHTML = '<h3>Stats</h3><ul class="stats-list">' + 
                Object.entries(ability.stats).map(([key, value]) => 
                    `<li><strong>${key}:</strong> ${value}</li>`
                ).join('') + '</ul>';
            statsEl.style.display = 'block';
        } else {
            statsEl.style.display = 'none';
        }
        
        // Set ability notes if available
        const notesEl = modal.querySelector('.ability-notes');
        if (ability.notes) {
            notesEl.innerHTML = '<h3>Notes</h3><p>' + ability.notes + '</p>';
            notesEl.style.display = 'block';
            
            // Add click handler for links in notes
            notesEl.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', (e) => {
                    const href = link.getAttribute('href');
                    const isExternalLink = !href.startsWith('#');
                    
                    // If it's an internal link (starts with #)
                    if (!isExternalLink) {
                        e.preventDefault();
                        // Close the modal
                        modal.style.display = 'none';
                        document.body.style.overflow = '';
                        
                        // Update the URL hash
                        window.location.hash = href;
                        
                        // Scroll to target after a small delay to ensure DOM is updated
                        setTimeout(() => {
                            const targetElement = document.querySelector(href);
                            if (targetElement) {
                                // First scroll to top to ensure we can scroll down to the target
                                window.scrollTo({ top: 0, behavior: 'instant' });
                                // Then scroll to the target
                                targetElement.scrollIntoView({ behavior: 'smooth' });
                                // Focus the target for accessibility
                                targetElement.focus();
                            }
                        }, 50);
                    } else {
                        // For external links, close the modal and navigate to the page
                        e.preventDefault();
                        modal.style.display = 'none';
                        document.body.style.overflow = '';
                        // Use a small delay to ensure the modal is closed before navigation
                        setTimeout(() => {
                            window.location.href = href;
                        }, 50);
                    }
                });
            });
        } else {
            notesEl.style.display = 'none';
        }
        
        // Show the modal with animation
        modal.style.display = 'block';
        // Trigger reflow to ensure the display property is applied
        void modal.offsetWidth;
        // Add show class to trigger the animation
        modal.classList.add('show');
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
});
