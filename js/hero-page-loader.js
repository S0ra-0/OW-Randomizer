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
    document.querySelector('.hero-main-image').src = `../${heroData.image}`;
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
    const abilityNameEl = document.getElementById('ability-name');
    const abilityDescriptionEl = document.getElementById('ability-description');

    // Clear existing placeholder icons
    abilityIconsContainer.innerHTML = '';

    if (abilities.length > 0) {
        abilities.forEach((ability, index) => {
            const button = document.createElement('button');
            button.className = 'ability-icon-btn';
            button.dataset.abilityIndex = index;
            button.dataset.abilityName = ability.name; // Add ability name for tooltip

            const img = document.createElement('img');
            img.src = `../${ability.icon}`;
            img.alt = ability.name;
            button.appendChild(img);

            abilityIconsContainer.appendChild(button);
        });

        // Function to update ability display
        const selectAbility = (index) => {
            const selectedAbility = abilities[index];
            if (!selectedAbility) return;

            // Update video and info
            abilityVideo.src = `../${selectedAbility.video}`;
            abilityNameEl.textContent = selectedAbility.name;
            
            // Create description with More Details button
            abilityDescriptionEl.innerHTML = '';
            const descriptionText = document.createElement('span');
            descriptionText.textContent = selectedAbility.description;
            abilityDescriptionEl.appendChild(descriptionText);
            
            // Add More Details button if there are details to show
            if (selectedAbility.stats || selectedAbility.notes) {
                const moreDetailsBtn = document.createElement('button');
                moreDetailsBtn.className = 'more-details-btn';
                moreDetailsBtn.textContent = 'More Details';
                moreDetailsBtn.onclick = () => showAbilityDetails(selectedAbility);
                abilityDescriptionEl.appendChild(document.createElement('br'));
                abilityDescriptionEl.appendChild(moreDetailsBtn);
            }

            // Update active button
            Array.from(abilityIconsContainer.children).forEach((btn, i) => {
                btn.classList.toggle('active', i === index);
            });
        };

        // Event listener for icon clicks
        abilityIconsContainer.addEventListener('click', (e) => {
            const button = e.target.closest('.ability-icon-btn');
            if (button && button.dataset.abilityIndex) {
                selectAbility(parseInt(button.dataset.abilityIndex, 10));
            }
        });

        // Select the first ability by default
        selectAbility(0);
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
        
        // Close modal when clicking the X
        modal.querySelector('.close-modal').onclick = () => {
            closeModal(modal);
        };
        
        // Close modal when clicking outside content
        window.onclick = (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        };
        
        // Close modal when pressing Escape key
        document.onkeydown = (event) => {
            if (event.key === 'Escape') {
                closeModal(modal);
            }
        };
        
        // Function to handle modal close with animation
        function closeModal(modalElement) {
            if (!modalElement) return;
            
            // Remove show class to trigger fade out
            modalElement.classList.remove('show');
            
            // Wait for the animation to complete before hiding the modal
            setTimeout(() => {
                modalElement.style.display = 'none';
                // Re-enable body scroll
                document.body.style.overflow = '';
            }, 300); // Match this with the CSS transition duration
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
