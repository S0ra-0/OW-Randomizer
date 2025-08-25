const overwatchHeroes = {
  perks: {
    tank: {
      minor: {
        'D.Va': [
          'Bunny Stomp: Call Mech\'s damage radius is increased by 50%.',
          'Ejection Suit: Eject grants 75 temporary overhealth.'
        ],
        'Doomfist': [
          'One Two: Hitting an enemy with Rocket Punch reloads all Hand Cannon ammo.',
          'Survival of the Fittest: The Best Defense grants 25 overhealth from eliminations and its max overhealth is increased by 50.'
        ],
        'Junker Queen': [
          'Rending Recall: Recalling Jagged Blade from a stuck target refreshes its wound.',
          'Battle Shout: Commanding Shout fully reloads Scatter Gun and increases allied reload speed by 50%.'
        ],
        'Mauga': [
          'Kinetic Bandolier: Overrun reloads up to 150 ammo while charging.',
          'Two Hearts: While on an objective, Mauga counts as 2 heroes and regenerates 20 health per second.'
        ],
        'Orisa': [
          'Fleeting Bulwark: Fortify briefly grants an additional 100% decaying overhealth when activated.',
          'Heat Dissipater: Critical hits from your primary fire refund heat.'
        ],
        'Ramattra': [
          'Void Surge: Void Accelerator periodically releases a burst of 6 additional projectiles during continuous fire.',
          'Prolonged Barrier: Void Barrier\'s duration is increased by 25%.'
        ],
        'Reinhardt': [
          'Crusader\'s Resolve: While using Barrier Field, your passive health regeneration triggers 50% sooner.',
          'Fiery Uptake: Barrier Field is healed for 100% of Fire Strikes damage dealt.'
        ],
        'Roadhog': [
          'Scrap Hook: Chain Hook hits reload 2 ammo.',
          'Hog Toss: Pig Pen\'s throw range is increased by 50%.'
        ],
        'Sigma': [
          'Kinetic Cycle: Absorbing projectiles with Kinetic Grasp also reduces Accretion\'s cooldown.',
          'Massive Impact: Accretion\'s knockdown duration increases to up to 3 seconds based on travel distance.'
        ],
        'Winston': [
          'Short Circuit: Tesla Cannon deals 30% more damage to deployable objects.',
          'Heavy Landing: During Primal Rage, Jump Pack\'s damage and area increase by up to 75% while airborne.'
        ],
        'Wrecking Ball': [
          'Steamroller: Roll impacts deal 100% more damage to Tanks.',
          'Pack Rat: Health Packs heal an additional 100 health.'
        ],
        'Zarya': [
          'Jump-Ups: Secondary Fire\'s self-knockback is increased by 75%.',
          'Graviton Crush: Graviton Surge deals up to 30% of enemy max health as damage over time.'
        ],
        'Hazard': [
          'Off The Top: Violent Leap’s Slash deals 50% more damage to enemies above 250 health.',
          'Reconstitution: Jagged Wall hits charge Spike Guard with 25 energy, up to 50 extra.'
        ]
      },
      major: {
        'D.Va': [
          'Shield System: Convert 150 health to shields. Defense Matrix restores shields based on 25% of its damage absorbed.',
          'Heavy Rockets: Micro Missiles are swapped for Heavy Rockets, which fire fewer projectiles with increased damage and explosion size.'
        ],
        'Doomfist': [
          'Seismic Empowerment: Hitting three or more enemies with Seismic Slam empowers Rocket Punch.',
          'Power Matrix: Power Block absorbs projectiles for the first second of its duration.'
        ],
        'Junker Queen': [
          'Deep Wounds: Scattergun hits extend your wound durations on those enemies by .25 seconds.',
          'A Savage Satiation: Carnage\'s impact damage gains 100% lifesteal.'
        ],
        'Mauga': [
          'Firewalker: Overrun ignites enemies hit.',
          'Combat Fuel: Critical hits grant Mauga 2 temporary overhealth on Cardiac Overdrive\'s next use, up to 100 overhealth.'
        ],
        'Orisa': [
          'Charged Javelin: Energy Javelin can be charged to increase projectile speed and knockback. Pierces enemies at full power.',
          'Projected Barrier: Javelin Spin is replaced with a barrier.'
        ],
        'Ramattra': [
          'Nanite Repair: Ramattra is healed for 50 health per second while within Ravenous Vortex.',
          'Vengeful Vortex: While Ravenous Vortex is airborne, use E again to detonate it, dealing 50 damage and pulling enemies downward.'
        ],
        'Reinhardt': [
          'Shield Slam: While Barrier Field is active, use Left Click to damage and knockback enemies.',
          'Crushing Victory: Charge damage grants temporary overhealth for 50% of the damage dealt.'
        ],
        'Roadhog': [
          'Invigorate: Take A Breather rapidly increases Roadhog\'s movement speed by 30%.',
          'Hogdrogen Exposure: Take A Breather also heals nearby allies for 50% of its healing.'
        ],
        'Sigma': [
          'Hyper Strike: Every 5 direct hits with Hyperspheres, your next successful Quick Melee levitates and knocks away enemies.',
          'Levitation: Activate and hold Double Jump to briefly levitate upward.'
        ],
        'Winston': [
          'Chain Lightning: Fully charged Secondary Fire hits bounce to up to 2 additional targets.',
          'Revitalizing Barrier: Barrier Projector heals allies within it for 30 health per second.'
        ],
        'Wrecking Ball': [
          'Hang Time: Piledriver winds up longer, gaining air control and dealing up to 50% more damage.',
          'Transfer Efficiency: Reactivating Adaptive Shield reduces its cooldown by 1.5 seconds per ally affected and ally health gained is increased by 33%.'
        ],
        'Zarya': [
          'Energy Lance: Particle Cannon\'s beam pierces enemies while over 50 energy.',
          'Spotter: Projected Barrier activates ally health regeneration and increases their movement speed by 15%.'
        ],
        'Hazard': [
          'Anarchic Zeal: Spike Guard’s spikes gain 40% Lifesteal.',
          'Deep Leap: Violent Leap’s range is increased by 20%.'
        ]
      }
    },
    damage: {
      minor: {
        'Ashe': [
          'Rapid Fire: Unscoped shots gain 30% increased attack speed, but deal 15% less damage.',
          'Sidewinder: Coach Gun pushes Ashe and enemies 20% farther.'
        ],
        'Bastion': [
          'Smart Bomb: A-36 Tactical Grenade\'s self-knockback is increased by 25% and no longer damages you.',
          'Armored Artillery: Configuration: Artillery grants 300 temporary overhealth.'
        ],
        'Cassidy': [
          'Quick Draw: Fan the Hammer shots are individually controlled and can crit for 50% more damage.',
          'Past Noon: Deadeye refunds 30% Ultimate charge if it fully expires.'
        ],
        'Echo': [
          'Friendly Imaging: Duplicate can also target allies.',
          'Enhanced Duplication: During Duplicate, your clone\'s first ultimate extends Duplicate\'s duration by 3 seconds.'
        ],
        'Genji': [
          'Acrobatics: Swift Strike resets double jump.',
          'Dragon\'s Thirst: Dragonblade swings gain 30% lifesteal.'
        ],
        'Hanzo': [
          'Sonic Disruption: Sonic Arrow hacks nearby Health Packs for 12 seconds.',
          'Scatter Arrows: Storm Arrows split into 3 new projectiles on their first ricochet and bounce 2 extra times.'
        ],
        'Junkrat': [
          'Aluminum Frame: Steel Trap\'s throw range is increased by 50%.',
          'Nitro Boost: During RIP-Tire, use (LSHIFT) to gain a quick boost of speed. Doing so reduces RIP-Tire\'s damage by 50%.'
        ],
        'Mei': [
          'Chilling Reach: Primary fire\'s range is increased by 30%.',
          'Permafrost: Ice Wall\'s duration and cooldown are increased by 2 seconds.'
        ],
        'Pharah': [
          'Drift Thrusters: Pharah can move while Barrage is active.',
          'Helix Shields: Convert 75 health to shields.'
        ],
        'Reaper': [
          'Death\'s Shadow: Shadow Step reloads hellfire shotguns and has 25% increased range.',
          'Soul Reaving: Collect Soul Globes from dead enemies to restore 50 health.'
        ],
        'Sojourn': [
          'Extended Mag: Maximum ammo increased by 15.',
          'Overcharged: Railgun\'s maximum energy is increased by 50 while Overclock is active.'
        ],
        'Soldier: 76': [
          'Recycled Pulse Munitions: Helix Rockets reload 15 ammo if they damage an enemy.',
          'Field Emergency: Biotic Field\'s healing is increased by 100% on critical health allies.'
        ],
        'Sombra': [
          'Viral Efficacy: Virus\' cooldown is reduced by 3 seconds when an enemy affected by Virus is eliminated.',
          'CTRL ALT ESC: Teleporting with Translocator while at critical health initiates passive health regeneration.'
        ],
        'Symmetra': [
          'Sentry Capacity: Sentry Turret gains an additional charge.',
          'Advanced Teleportation: Teleporter\'s range is increased by 50%.'
        ],
        'Torbjorn': [
          'Craftsman: Forge Hammer can restore armor health to allies. Turret repair\'s heal is increased by 25%.',
          'Fully Loaded: Activating Overload fully refills Rivet Gun\'s ammo.'
        ],
        'Tracer': [
          'Blink Packs: Health Packs restore 1 Blink charge.',
          'Blast From the Past: Pulse Bomb\'s radius is increased by 50%.'
        ],
        'Venture': [
          'Seismic Sense: While underground, Venture can sense enemies within 25 meters.',
          'Excavation Exhilaration: While Tectonic Shock is active, cooldowns refresh 300% faster.'
        ],
        'Widowmaker': [
          'Scoped Efficiency: Scoped shots cost 3 ammo instead of 5.',
          'Focused Aim: Scoped shots charge 50% faster during Infra-Sight.'
        ],
        'Freja': [
          'Frost Bolts: Enemies hit by 3 regular bolts in quick succession are slowed by 20% for 2 seconds.',
          'Tracking Instinct: Critical health enemies are revealed to you.'
        ]
      },
      major: {
        'Ashe': [
          'Viper\'s Sting: Hitting 2 consecutive scoped shots on a target deals 25 extra damage and reloads 2 ammo.',
          'Airburst: Dynamite has a 40% increased detonation radius while airborne and refunds 3 ammo when thrown.'
        ],
        'Bastion': [
          'Lindholm Explosives: Configuration: Assault\'s Weapon slowly fires explosive shells instead of a rotary cannon.',
          'Self-Repair: Press E to rapidly heal yourself.'
        ],
        'Cassidy': [
          'Gun Slingin\': Critical Hits with primary fire reduce the cooldown of Combat Roll by 3 seconds.',
          'Bang Bang: Cassidy throws a second Flashbang that travels farther, but both Flashbangs deal 30% reduced damage.'
        ],
        'Echo': [
          'Full Salvo: Sticky Bombs fires 50% more projectiles, but all Sticky Bombs deal 15% less damage.',
          'High Beams: Focusing Beam eliminations reset Flight\'s cooldown.'
        ],
        'Genji': [
          'Blade Twisting: Swift Strike deals 25 additional damage over time when used shortly after an elimination.',
          'Meditation: Regenerate 25 health per second while Deflect is active.'
        ],
        'Hanzo': [
          'Dragon Fury: After hitting an enemy with primary fire, gain 25% attack speed for 1 second.',
          'Yamagami Technique: Wall Climb accelerates your Lunge cooldown by 250%.'
        ],
        'Junkrat': [
          'Frag Cannon: Frag Launcher\'s projectile speed is increased by 40%, but its max ammo is reduced by 1.',
          'Tick Tock: Concussive Mine arms 0.5 seconds after landing, increasing damage by 50%, explosion radius by 50%, and health by 200%.'
        ],
        'Mei': [
          'Biting Cold: Secondary fire hits slow enemies by 15% for 1.5 seconds, stacking up to 30%.',
          'Cryo-Storm: Cryo-Freeze slows and deals 70 damage per second to nearby enemies.'
        ],
        'Pharah': [
          'Concussive Implosion: Concussive Blast\'s knockback is inverted to a pull-in.',
          'Fuel Stores: Jet Dash grants 50% fuel. Maximum overfuel is increased by 100%.'
        ],
        'Reaper': [
          'Dire Triggers: Use (RMB) to fire a volley with long-range accuracy from both Hellfire shotguns.',
          'Ravenous Wraith: Leaving Wraith form grants 40% additional lifesteal for 3 seconds.'
        ],
        'Sojourn': [
          'Dual Thrusters: Power Slide gains an additional charge and its jump height shifts to lateral movement.',
          'Adhesive Siphon: Disruptor Shot can stick to enemies and generates Railgun energy when dealing damage.'
        ],
        'Soldier: 76': [
          'Agility Training: Sprint\'s speed is increased by 20% and reload can be performed while Sprint is active.',
          'Stim Pack: Biotic Field can be used as a Stim Pack, increasing attack speed and reload speed by 30% while being unhealable for 4 seconds.'
        ],
        'Sombra': [
          'White Hat: Hack can be used on allies to restore 100 health over 2 seconds.',
          'Stack Overflow: Hack\'s silence duration is increased by 100%, but its range is decreased by 30%.'
        ],
        'Symmetra': [
          'Perfect Alignment: Primary fire\'s range increases by 15% with each additional charge level.',
          'Shield Battery: Symmetra regenerates 20 shields per second while within 10 meters of her Teleporter.'
        ],
        'Torbjorn': [
          'Anchor Bolts: Deploy Turret\'s throw range is increased by 50%, and it can now attach to walls and ceilings.',
          'Overloaded Turret: Overload upgrades your Turret for 5 seconds, increasing its health and damage.'
        ],
        'Tracer': [
          'Flashback: Recall restores all Blink charges.',
          'Quantum Entanglement: Recall grants 50 overhealth that decays over time.'
        ],
        'Venture': [
          'SMART-R Excavator: SMART Excavator\'s range is increased by 25%.',
          'Covered in Dirt: Dealing damage with Clobber grants up to 30 Explorer\'s Resolve shields.'
        ],
        'Widowmaker': [
          'Escape Plan: Scoped shot hits reduce Grappling Hook\'s cooldown by up to 4 seconds.',
          'Deadly Deux: Venom Mine gains 50% increased damage and a second charge, enabling two active mines at a time.'
        ],
        'Freja': [
          'Ready to Hunt: Updraft grants a temporary free use of Quick Dash.',
          'Relentless Barrage: Direct hits with Take Aim refund 4 automatic bolt ammo.'
        ]
      }
    },
    support: {
      minor: {
        'Ana': [
          'Groggy: Enemies waking up from Sleep Dart are slowed for 2 seconds.',
          'Biotic Bounce: After exploding, Biotic Grenade bounces and explodes again for 50 damage and healing.'
        ],
        'Baptiste': [
          'Field Medicine: Immortality Field restores 80 health to nearby allies and 40 health to Baptiste when destroyed.',
          'Automated Healing: After placing Amplification Matrix, your Shoulder Turret periodically fires up to 12 shots at allies, each restoring 25 health.'
        ],
        'Brigitte': [
          'Barrier Restoration: Shield Bash restores 100 health to Barrier Shield when it hits an enemy.',
          'Morale Boost: Inspire lasts 3 seconds longer when activated by Whip Shot.'
        ],
        'Illari': [
          'Rapid Construction: Healing Pylon builds 300% faster and its cooldown is reduced by 1.5 seconds.',
          'Summer Solstice: Illari\'s flight time during Captive Sun is increased by 3 seconds and her flight speed is increased by 20%.'
        ],
        'Kiriko': [
          'Urgent Care: Healing Ofuda projectile speed is increased by 50% when seeking critical health allies.',
          'Fortune Teller: Kunai hits launch 2 Healing Ofuda to an ally in front of you.'
        ],
        'Lifeweaver': [
          'Cleansing Grasp: Life Grip cleanses negative effects.',
          'Life Cycle: While alive, regenerate 10 health per second. Upon death, drop a healing seed that heals allies for 250 health.'
        ],
        'Lucio': [
          'Bass Blowout: Soundwave\'s knockback is increased by 15%.',
          'Groovin: Regenerate 4 ammo per second while wall riding.'
        ],
        'Mercy': [
          'Angelic Recovery: Mercy receives 15 health per second while Caduceus Staff is attached to a full-health ally.',
          'Winged Reach: Guardian Angel\'s range is increased by 30%.'
        ],
        'Moira': [
          'Vanish: Fade\'s duration is increased by 0.5 seconds.',
          'Uprush: Fade\'s jump height is increased by 50%.'
        ],
        'Zenyatta': [
          'Zenith Kick: Snap Kick\'s knockback distance is increased by 30%.',
          'Ascendance: Activate and hold Double Jump to hover for up to 3 seconds.'
        ],
        'Juno': [
          'Familiar Vitals: Pulsar Torpedoes lock onto allies 35% faster.',
          'Re-Boots: Activating Glide Boost resets Double Jump.'
        ]
      },
      major: {
        'Ana': [
          'Headhunter: Biotic Rifle can crit enemies.',
          'Shrike: Using Nano Boost also casts it on Ana.'
        ],
        'Baptiste': [
          'Assault Burst: Regenerative Burst grants Baptiste 20% attack speed for 4 seconds, but no longer instantly heals.',
          'Rocket Boots: While airborne from Exo Boots, use (SPACE) to dash horizontally.'
        ],
        'Brigitte': [
          'Quick Fix: Repair Packs instantly heal an additional 35 health to critical health allies.',
          'Whip Lash: Whip Shot\'s knockback can slam enemies into walls, dealing 50 extra damage.'
        ],
        'Illari': [
          'Solar Power: Fully-charged Solar Rifle hits grant 12.5% of your maximum solar energy, overfilling up to 50%.',
          'Sunburn: Outburst ignites enemies, dealing an additional 70 damage over 3 seconds.'
        ],
        'Kiriko': [
          'Shuffling: Swift Step can be used again within 4 seconds of its initial cast.',
          'Foxtrot: Protection Suzu grants 40% movement speed to allies for 2 seconds.'
        ],
        'Lifeweaver': [
          'Lifeweaving: Rejuvenating Dash adds 20 healing to your next Healing Blossom within 3 seconds.',
          'Superbloom: Thorns detonate for 30 extra damage when enough stick within 1.5 seconds.'
        ],
        'Lucio': [
          'Noise Violation: Crossfade\'s range is increased by 150% while Amp It Up is active.',
          'Accelerando: Lucio\'s attack speed is increased by 50% while Amp It Up is active.'
        ],
        'Mercy': [
          'Chain Boost: Secondary fire links to a second nearby ally.',
          'Flash Heal: Resurrect can be used on Caduceus Staff\'s active target to restore 150 health. Doing so incurs a 15-second cooldown.'
        ],
        'Moira': [
          'Ethical Nourishment: Biotic Orb\'s first 50 healing is instant on each ally it encounters.',
          'Contamination: Enemies being damaged by Biotic Orb receive 25% reduced healing.'
        ],
        'Zenyatta': [
          'Focused Destruction: Secondary fire charges 20% faster and can store 1 extra Orb of Destruction.',
          'Duality: Zenyatta heals Orb of Harmony targets for 20% of his damage dealt to Orb of Discord targets.'
        ],
        'Juno': [
          'Master Blaster: Mediblaster can crit enemies.',
          'Locked On: Reduce the cooldown of Pulsar Torpedoes by 1.5 seconds for each enemy hit.'
        ]
      }
    }
  },

  tank: [
    { name: 'D.Va', role: 'tank', description: 'A former pro gamer who now pilots a state-of-the-art mech in defense of her homeland.', image: '/img/heroes/dva.png' },
    { name: 'Doomfist', role: 'tank', description: 'A tactical leader who uses his powerful cybernetics to protect the innocent.', image: '/img/heroes/doomfist.png' },
    { name: 'Hazard', role: 'tank', description: 'A formidable frontline combatant.', image: '/img/heroes/hazard.png', release_date: 'TBA', base_of_operations: 'TBA', affiliation: 'TBA' },
    { name: 'Junker Queen', role: 'tank', description: 'The ruthless, Australian-born ruler of Junkertown.', image: '/img/heroes/junker-queen.png' },
    { name: 'Mauga', role: 'tank', description: 'A fierce warrior who can brawl with the best of them.', image: '/img/heroes/mauga.png' },
    { name: 'Orisa', role: 'tank', description: 'A peacekeeping robot designed to protect the people of Numbani.', image: '/img/heroes/orisa.png' },
    { name: 'Ramattra', role: 'tank', description: 'A brilliant scientist who can manipulate gravity.', image: '/img/heroes/ramattra.png' },
    { name: 'Reinhardt', role: 'tank', description: 'A champion of a bygone age, who lives by a knightly code of honor.', image: '/img/heroes/reinhardt.png' },
    { name: 'Roadhog', role: 'tank', description: 'A ruthless killer with a love for destruction and chaos.', image: '/img/heroes/roadhog.png' },
    { name: 'Sigma', role: 'tank', description: 'An eccentric astrophysicist who can control gravity.', image: '/img/heroes/sigma.png' },
    { name: 'Winston', role: 'tank', description: 'A super-intelligent, genetically engineered gorilla who is a brilliant scientist and a champion for humanity\'s potential.', image: '/img/heroes/winston.png' },
    { name: 'Wrecking Ball', role: 'tank', description: 'A resourceful hamster who pilots a heavily armed, rolling mech.', image: '/img/heroes/wrecking-ball.png' },
    { name: 'Zarya', role: 'tank', description: 'One of the world\'s strongest women, a celebrated athlete who sacrificed personal glory to protect her family, friends, and country in a time of war.', image: '/img/heroes/zarya.png', release_date: '2016-05-24', base_of_operations: 'Krasnoyarsk Front, Russia', affiliation: 'Russian Defensive Forces, Overwatch' }
  ],

  damage: [
        { 
      name: 'Ashe', 
      role: 'damage', 
      description: 'The ambitious and calculating leader of the Deadlock Gang and a respected figure in the criminal underworld.', 
      image: '/img/heroes/ashe.png',
      abilities: [
        {
          name: 'The Viper',
          description: 'Ashe\'s semi-automatic rifle. She can fire quick shots from the hip or aim down sights for more precise, damaging shots.',
          icon: '../img/heroes/icons/ashe-viper.png',
          video: '../videos/ashe/the-viper.mp4'
        },
        {
          name: 'Coach Gun',
          description: 'Ashe blasts enemies in front of her, knocking them back and propelling herself backward for added mobility.',
          icon: '../img/heroes/icons/ashe-coach-gun.png',
          video: '../videos/ashe/coach-gun.mp4'
        },
        {
          name: 'Dynamite',
          description: 'Ashe throws an explosive that detonates after a short delay or immediately when she shoots it. The explosion also lights enemies on fire, dealing damage over time.',
          icon: '../img/heroes/icons/ashe-dynamite.png',
          video: '../videos/ashe/dynamite.mp4'
        },
        {
          name: 'B.O.B.',
          description: 'Ashe summons her trusted omnic sidekick, B.O.B., who charges forward, knocks enemies into the air, and lays down suppressing fire with his arm cannons.',
          icon: '../img/heroes/icons/ashe-bob.png',
          video: '../videos/ashe/bob.mp4'
        }
      ]
    },
    { name: 'Bastion', role: 'damage', description: 'A transforming robot that can switch between a mobile assault mode and a stationary turret configuration.', image: '/img/heroes/bastion.png' },
    { name: 'Cassidy', role: 'damage', description: 'A gunslinger who doles out justice on his own terms.', image: '/img/heroes/cassidy.png' },
    { name: 'Echo', role: 'damage', description: 'An evolutionary robot programmed with a rapidly adapting artificial intelligence, versatile enough to fill multiple battlefield roles.', image: '/img/heroes/echo.png' },
    { name: 'Freja', role: 'damage', description: 'A skilled hunter with ice abilities.', image: '/img/heroes/freja.png', release_date: 'TBA', base_of_operations: 'TBA', affiliation: 'TBA' },
    { name: 'Genji', role: 'damage', description: 'A cyborg ninja who has made peace with the augmented body he once rejected.', image: '/img/heroes/genji.png' },
    { name: 'Hanzo', role: 'damage', description: 'A deadly bowman and assassin without peer.', image: '/img/heroes/hanzo.png' },
    { name: 'Junkrat', role: 'damage', description: 'An explosives-obsessed demolitionist who lives to cause chaos and destruction.', image: '/img/heroes/junkrat.png' },
    { name: 'Mei', role: 'damage', description: 'A specialist in weather manipulation who has taken up the fight to preserve the environment.', image: '/img/heroes/mei.png' },
    { name: 'Pharah', role: 'damage', description: 'A decorated soldier who patrols the skies in her experimental Raptora combat suit.', image: '/img/heroes/pharah.png' },
    { name: 'Reaper', role: 'damage', description: 'A mercenary and terrorist, clad in black, who haunts the battlefields of the world like a wraith.', image: '/img/heroes/reaper.png' },
    { name: 'Sojourn', role: 'damage', description: 'A former captain of Overwatch with cybernetic capabilities.', image: '/img/heroes/sojourn.png' },
    { name: 'Soldier: 76', role: 'damage', description: 'A vigilante who will stop at nothing to bring the enemies of Overwatch to justice.', image: '/img/heroes/soldier-76.png' },
    { name: 'Sombra', role: 'damage', description: 'One of the world\'s most notorious hackers, Sombra uses information to manipulate those in power.', image: '/img/heroes/sombra.png' },
    { name: 'Symmetra', role: 'damage', description: 'An architect who can bend reality to her will, creating structures and weapons from hard-light.', image: '/img/heroes/symmetra.png' },
    { name: 'Torbjorn', role: 'damage', description: 'An expert weapons designer who creates advanced weaponry and automated turrets.', image: '/img/heroes/torbjorn.png' },
    { name: 'Tracer', role: 'damage', description: 'A time-jumping adventurer and an irrepressible force for good.', image: '/img/heroes/tracer.png' },
    { name: 'Venture', role: 'damage', description: 'A spirited archaeologist equipped with a massive drill.', image: '/img/heroes/venture.png' },
    { name: 'Widowmaker', role: 'damage', description: 'The perfect assassin: a patient, ruthlessly efficient killer who shows neither emotion nor remorse.', image: '/img/heroes/widowmaker.png', release_date: '2016-05-24', base_of_operations: 'Annecy, France', affiliation: 'Talon' }
  ],

  support: [
    { 
      name: 'Ana', 
      role: 'support', 
      description: 'One of the founding members of Overwatch, Ana uses her skills and expertise to defend her home and the people she cares for.', 
      image: '/img/heroes/ana.png',
      base_of_operations: 'Cairo, Egypt',
      release_date: 'July 19, 2016',
      birthday: 'January 1',
      backstory: `
        <strong>Story</strong><br>
        A founding member of Overwatch and once renowned as the greatest sniper in the world, Ana Amari comes from a long line of decorated military veterans. Though she was thought to have perished in a firefight with Talon, Ana has rejoined the fray to protect her country, family, and closest allies.
        
        <br><br><strong>OVERWATCH</strong><br>
        As the Omnic Crisis inflicted a heavy toll on Egypt, the country's depleted and undermanned armed forces relied on elite snipers for support. Among them was Ana Amari, who was widely considered to be the world's best. Her superior marksmanship, decision-making, and instincts made her a natural selection to join the Overwatch strike team that would end the war.
        
        Following the success of Overwatch's original mission, Ana served for many years as Strike Commander Morrison's second-in-command. Despite her responsibilities in leading the organization, Ana refused to step away from combat operations. She remained on active duty well into her fifties, until she was believed to have been killed during a hostage rescue mission by the Talon operative known as Widowmaker.
        
        <br><br><strong>POST OVERWATCH</strong><br>
        In truth, Ana survived that encounter, despite being gravely wounded and losing her right eye. During her recovery, she wrestled with the weight of a life spent in combat, and she chose to stay out of the world's growing conflicts. However, as time passed, she realized she could not sit on the sidelines while people threatened her city and the innocents around her. Ana rejoined the fight, this time as a healer, and dedicated herself to monitoring global security threats. Prior to disrupting Talon operations in Cairo, she intercepted an unlikely broadcast: the Overwatch Recall from her former friend, Winston.
        
        <br><br><strong>RECALL</strong><br>
        Ana remained uncertain about the Recall, but she had decided to help her comrades from the shadows. She sent word to Cole Cassidy, knowing that he had survived the demise of Overwatch and returned as a gunslinger for hire. Ana knew the organization needed new blood—people like Cassidy and her daughter, Pharah—were it to stand a chance, and worried the old guard would only poison the agency's return. She shared as much with her daughter in an overdue reunion, before embarking on her own mission with Soldier: 76.
        
        With no regrets left, Ana travels the world tracking down Talon and the ghosts that haunt her former allies. And while she didn't rejoin Overwatch, Ana keeps her eye on their exploits just in case.
      `,
      abilities: [
        {
          name: 'Biotic Rifle',
          description: 'Ana\'s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle\'s scope to zoom in on targets and make highly accurate shots.',
          icon: '../img/heroes/icons/anagun.png',
          video: '../videos/ana/biotic-rifle.mp4',
          stats: {
            'Healing per shot': '75 health over 0.59 seconds',
            'Damage per shot': '75 damage over 0.59 seconds',
            'Rate of fire': '1.25 shots per second',
            'Ammo': '15',
            'Reload time': '1.5 seconds animation',
            'Unscoped accuracy':'Projectile',
            'Scoped accuracy': '100% accurate hitscan',
            'Movement speed penalty': "-65% (scoped)"
          },
          notes: 'Ana must reload her rifle after using all ammo.<br> The rifle has no damage falloff at range.<br> The rifle can not headshot (without the Major perk: Headhunter).<br> Shots pass through full health allies and do not affect them.'
        },
        {
          name: 'Sleep Dart',
          description: 'Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).',
          icon: '../img/heroes/icons/ana-ability-1.png',
          video: '../videos/ana/sleep-dart.mp4',
          stats: {
            'Effect': 'Puts target to sleep for 3.5 seconds',
            'Cast time': '0.240s startup + 0.752 seconds recovery',
            'Projectile speed': '60 meters per second',
            'Cooldown': '14 seconds',
            'Duration': '<br>1.5 - 5 seconds (non-tank)<br>1.5 - 3 seconds (tank)'
          },
          notes: "Sleep Dart has a short cast time and is a projectile.<br>Sleep dart deals 5 damage on hit.<br>Can be nullified by kiriko's protective suzu.<br>Sleep dart can be improved by the Minor perk: Groggy."
        },
        {
          name: 'Biotic Grenade',
          description: 'Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments.',
          icon: '../img/heroes/icons/ana-ability-2.png',
          video: '../videos/ana/biotic-grenade.mp4',
          stats: {
            'Healing': '75',
            'Damage': '75',
            'Healing modification': '<br>+50% to allies<br>-100% to enemies',
            'Heal block duration': '<br>3 seconds',
            'Cooldown': '14 seconds',
            'Area of effect': '4 meter radius'
          },
          notes: "Biotic Grenade can be improved by the Minor perk: Biotic Bounce.<br>Can be nullified by kiriko's protective suzu."
        },
        {
          name: 'Nano Boost',
          description: 'Ana injects an ally with a combat boost. They deal more damage, and take less damage from enemies attacks.',
          icon: '../img/heroes/icons/ana-ultimate.png',
          video: '../videos/ana/nano-boost.mp4',
          stats: {
            'Healing': '250',
            'Damage boost': '+50%',
            'Damage reduction': '-50%',
            'Duration': '8 seconds',
            'Ultimate cost': '2300 points',
            'Cast time' : '0.128 seconds + 0.6 seconds recovery',
            'Casting range': '40 meters',
          },
          notes: '<br>The effect ends immediately if the target dies. ,<br>Can only be used on yourself in Free for all Deathmatch. <br>Nano Boost is a non-hitscan projectile that cannot miss and cannot be blocked. However, if the target dies before the projectile reaches them, Nano Boost gets consumed and wasted.<br>Can be improved by the Major perk: Shrike.'
        },
        {
          name: 'Minor perk: Groggy',
          description: 'Enemies waking up from Sleep Dart are slowed and take 50 damage for 2 seconds.',
          icon: '../img/heroes/icons/ana-minor-perk-1.webp',
          video: '../videos/ana/ana-minor-perk-1.mp4',
          stats: {
            'Slow effect': '50% movement speed reduction',
            'Damage': '50',
            'Duration': '2 seconds',
            'Cooldown': '14 seconds'
          },
          notes: 'The slow effect makes it easier to land follow-up shots on awakened targets.'
        },
        {
          name: 'Minor perk: Biotic Bounce',
          description: 'After exploding, Biotic Grenade bounces and explodes again for 25 damage and healing.',
          icon: '../img/heroes/icons/ana-minor-perk-2.webp',
          video: '../videos/ana/ana-minor-perk-2.mp4',
          stats: {
            'Healing': '25',
            'Damage': '25',         
          },
          notes: 'The secondary explosion has the same effects as the primary, including healing boost and anti-heal, but doing less damage/healing.'
        },
        {
          name: 'Major perk: Headhunter',
          description: 'Biotic Rifle can now land critical hits on enemies heads for 1.5x damage.',
          icon: '../img/heroes/icons/ana-major-perk-1.webp',
          video: '../videos/ana/ana-major-perk-1.mp4',
          stats: {
            'Critical damage': '1.5x base damage (75 -> 112.5)',
            'Effect': 'Applies to scoped and unscoped shots'
          },
          notes: 'Headshots with Biotic Rifle now deal 112.5 damage instead of 75, this makes Ana more effective at dueling enemy DPS heroes.'
        },
        {
          name: 'Major perk: Shrike',
          description: 'Using Nano Boost also casts it on Ana.',
          icon: '../img/heroes/icons/ana-major-perk-2.webp',
          video: '../videos/ana/ana-major-perk-2.mp4',
          stats: {
            'Self-heal': '250 health',
            'Duration': '6 seconds',
            'Effect': 'Grants same benefits as Nano Boost target'
          },
          notes: 'When Ana uses Nano Boost on an ally, she also receives the same benefits, this effectively doubles the value of her ultimate.'
        },
      ]
    },
    { name: 'Baptiste', role: 'support', description: 'A combat medic who uses his skills to help those in need, while grappling with his past as a Talon operative.', image: '/img/heroes/baptiste.png' },
    { name: 'Brigitte', role: 'support', description: 'An adventurer and squire to Reinhardt Wilhelm, who is determined to fight for the greater good.', image: '/img/heroes/brigitte.png' },
    { name: 'Illari', role: 'support', description: 'The last child of the sun, a warrior with the power of a solar goddess.', image: '/img/heroes/illari.png' },
    { name: 'Juno', role: 'support', description: 'A versatile support with powerful healing capabilities.', image: '/img/heroes/juno.png', release_date: 'TBA', base_of_operations: 'TBA', affiliation: 'TBA' },
    { name: 'Kiriko', role: 'support', description: 'A skilled ninja healer and protector of her hometown.', image: '/img/heroes/kiriko.png' },
    { name: 'Lifeweaver', role: 'support', description: 'A brilliant scientist from Thailand who combines nature with technology to heal the world.', image: '/img/heroes/lifeweaver.png' },
    { name: 'Lucio', role: 'support', description: 'An international celebrity who inspires social change through his music and actions.', image: '/img/heroes/lucio.png' },
    { name: 'Mercy', role: 'support', description: 'A guardian angel to those who come under her care, Dr. Angela Ziegler is a peerless healer, a brilliant scientist, and a staunch advocate for peace.', image: '/img/heroes/mercy.png' },
    { name: 'Moira', role: 'support', description: 'A brilliant geneticist who is pushing the boundaries of science, even if it means crossing ethical lines.', image: '/img/heroes/moira.png' },
    { name: 'Zenyatta', role: 'support', description: 'An omnic monk who wanders the world in search of spiritual enlightenment.', image: '/img/heroes/zenyatta.png', release_date: '2016-05-24', base_of_operations: 'Shambali Monastery, Nepal', affiliation: 'Shambali' }
  ],

  // Get all heroes as a single array
  all: function() {
    return [...this.tank, ...this.damage, ...this.support];
  },

  // Get a random perk for a given hero and type
  getRandomPerk: function(heroName, type = 'minor') {
    const hero = this.all().find(h => h.name === heroName);
    if (!hero) return 'No hero found.';
    
    const perks = this.perks[hero.role]?.[type]?.[heroName];
    if (!perks || perks.length === 0) {
      return `No ${type} perk available for this hero.`;
    }
    return perks[Math.floor(Math.random() * perks.length)];
  },
  
  // Get random hero with perks
  getRandom: function(role = 'all') {
    const heroes = role === 'all' ? this.all() : this[role.toLowerCase()];
    if (!heroes || heroes.length === 0) return { error: 'Invalid role or no heroes in role. Please use: tank, damage, support, or all' };
    
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];
    
    return {
      ...randomHero,
      minorPerk: this.getRandomPerk(randomHero.name, 'minor'),
      majorPerk: this.getRandomPerk(randomHero.name, 'major')
    };
  }
};

// Example usage:
// console.log(overwatchHeroes.getRandom('tank'));  // Random tank
// console.log(overwatchHeroes.getRandom('damage')); // Random damage
// console.log(overwatchHeroes.getRandom('support')); // Random support
// console.log(overwatchHeroes.getRandom());         // Random hero from any role
// console.log(overwatchHeroes.all());               // Get all heroes as an array

export { overwatchHeroes };
