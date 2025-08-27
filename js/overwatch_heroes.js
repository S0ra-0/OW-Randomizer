const overwatchHeroes = {
  perks: {
    tank: {
      minor: {
        "D.Va": [
          "Bunny Stomp: Call Mech's damage radius is increased by 50%.",
          "Ejection Suit: Eject grants 75 temporary overhealth.",
        ],
        Doomfist: [
          "One Two: Hitting an enemy with Rocket Punch reloads all Hand Cannon ammo.",
          "Survival of the Fittest: The Best Defense grants 25 overhealth from eliminations and its max overhealth is increased by 50.",
        ],
        "Junker Queen": [
          "Rending Recall: Recalling Jagged Blade from a stuck target refreshes its wound.",
          "Battle Shout: Commanding Shout fully reloads Scatter Gun and increases allied reload speed by 50%.",
        ],
        Mauga: [
          "Kinetic Bandolier: Overrun reloads up to 150 ammo while charging.",
          "Two Hearts: While on an objective, Mauga counts as 2 heroes and regenerates 20 health per second.",
        ],
        Orisa: [
          "Fleeting Bulwark: Fortify briefly grants an additional 100% decaying overhealth when activated.",
          "Heat Dissipater: Critical hits from your primary fire refund heat.",
        ],
        Ramattra: [
          "Void Surge: Void Accelerator periodically releases a burst of 6 additional projectiles during continuous fire.",
          "Prolonged Barrier: Void Barrier's duration is increased by 25%.",
        ],
        Reinhardt: [
          "Crusader's Resolve: While using Barrier Field, your passive health regeneration triggers 50% sooner.",
          "Fiery Uptake: Barrier Field is healed for 100% of Fire Strikes damage dealt.",
        ],
        Roadhog: [
          "Scrap Hook: Chain Hook hits reload 2 ammo.",
          "Hog Toss: Pig Pen's throw range is increased by 50%.",
        ],
        Sigma: [
          "Kinetic Cycle: Absorbing projectiles with Kinetic Grasp also reduces Accretion's cooldown.",
          "Massive Impact: Accretion's knockdown duration increases to up to 3 seconds based on travel distance.",
        ],
        Winston: [
          "Short Circuit: Tesla Cannon deals 30% more damage to deployable objects.",
          "Heavy Landing: During Primal Rage, Jump Pack's damage and area increase by up to 75% while airborne.",
        ],
        "Wrecking Ball": [
          "Steamroller: Roll impacts deal 100% more damage to Tanks.",
          "Pack Rat: Health Packs heal an additional 100 health.",
        ],
        Zarya: [
          "Jump-Ups: Secondary Fire's self-knockback is increased by 75%.",
          "Graviton Crush: Graviton Surge deals up to 30% of enemy max health as damage over time.",
        ],
        Hazard: [
          "Off The Top: Violent Leap’s Slash deals 50% more damage to enemies above 250 health.",
          "Reconstitution: Jagged Wall hits charge Spike Guard with 25 energy, up to 50 extra.",
        ],
      },
      major: {
        "D.Va": [
          "Shield System: Convert 150 health to shields. Defense Matrix restores shields based on 25% of its damage absorbed.",
          "Heavy Rockets: Micro Missiles are swapped for Heavy Rockets, which fire fewer projectiles with increased damage and explosion size.",
        ],
        Doomfist: [
          "Seismic Empowerment: Hitting three or more enemies with Seismic Slam empowers Rocket Punch.",
          "Power Matrix: Power Block absorbs projectiles for the first second of its duration.",
        ],
        "Junker Queen": [
          "Deep Wounds: Scattergun hits extend your wound durations on those enemies by .25 seconds.",
          "A Savage Satiation: Carnage's impact damage gains 100% lifesteal.",
        ],
        Mauga: [
          "Firewalker: Overrun ignites enemies hit.",
          "Combat Fuel: Critical hits grant Mauga 2 temporary overhealth on Cardiac Overdrive's next use, up to 100 overhealth.",
        ],
        Orisa: [
          "Charged Javelin: Energy Javelin can be charged to increase projectile speed and knockback. Pierces enemies at full power.",
          "Projected Barrier: Javelin Spin is replaced with a barrier.",
        ],
        Ramattra: [
          "Nanite Repair: Ramattra is healed for 50 health per second while within Ravenous Vortex.",
          "Vengeful Vortex: While Ravenous Vortex is airborne, use E again to detonate it, dealing 50 damage and pulling enemies downward.",
        ],
        Reinhardt: [
          "Shield Slam: While Barrier Field is active, use Left Click to damage and knockback enemies.",
          "Crushing Victory: Charge damage grants temporary overhealth for 50% of the damage dealt.",
        ],
        Roadhog: [
          "Invigorate: Take A Breather rapidly increases Roadhog's movement speed by 30%.",
          "Hogdrogen Exposure: Take A Breather also heals nearby allies for 50% of its healing.",
        ],
        Sigma: [
          "Hyper Strike: Every 5 direct hits with Hyperspheres, your next successful Quick Melee levitates and knocks away enemies.",
          "Levitation: Activate and hold Double Jump to briefly levitate upward.",
        ],
        Winston: [
          "Chain Lightning: Fully charged Secondary Fire hits bounce to up to 2 additional targets.",
          "Revitalizing Barrier: Barrier Projector heals allies within it for 30 health per second.",
        ],
        "Wrecking Ball": [
          "Hang Time: Piledriver winds up longer, gaining air control and dealing up to 50% more damage.",
          "Transfer Efficiency: Reactivating Adaptive Shield reduces its cooldown by 1.5 seconds per ally affected and ally health gained is increased by 33%.",
        ],
        Zarya: [
          "Energy Lance: Particle Cannon's beam pierces enemies while over 50 energy.",
          "Spotter: Projected Barrier activates ally health regeneration and increases their movement speed by 15%.",
        ],
        Hazard: [
          "Anarchic Zeal: Spike Guard’s spikes gain 40% Lifesteal.",
          "Deep Leap: Violent Leap’s range is increased by 20%.",
        ],
      },
    },
    damage: {
      minor: {
        Ashe: [
          "Rapid Fire: Unscoped shots gain 30% increased attack speed, but deal 15% less damage.",
          "Sidewinder: Coach Gun pushes Ashe and enemies 20% farther.",
        ],
        Bastion: [
          "Smart Bomb: A-36 Tactical Grenade's self-knockback is increased by 25% and no longer damages you.",
          "Armored Artillery: Configuration: Artillery grants 300 temporary overhealth.",
        ],
        Cassidy: [
          "Quick Draw: Fan the Hammer shots are individually controlled and can crit for 50% more damage.",
          "Past Noon: Deadeye refunds 30% Ultimate charge if it fully expires.",
        ],
        Echo: [
          "Friendly Imaging: Duplicate can also target allies.",
          "Enhanced Duplication: During Duplicate, your clone's first ultimate extends Duplicate's duration by 3 seconds.",
        ],
        Genji: [
          "Acrobatics: Swift Strike resets double jump.",
          "Dragon's Thirst: Dragonblade swings gain 30% lifesteal.",
        ],
        Hanzo: [
          "Sonic Disruption: Sonic Arrow hacks nearby Health Packs for 12 seconds.",
          "Scatter Arrows: Storm Arrows split into 3 new projectiles on their first ricochet and bounce 2 extra times.",
        ],
        Junkrat: [
          "Aluminum Frame: Steel Trap's throw range is increased by 50%.",
          "Nitro Boost: During RIP-Tire, use (LSHIFT) to gain a quick boost of speed. Doing so reduces RIP-Tire's damage by 50%.",
        ],
        Mei: [
          "Chilling Reach: Primary fire's range is increased by 30%.",
          "Permafrost: Ice Wall's duration and cooldown are increased by 2 seconds.",
        ],
        Pharah: [
          "Drift Thrusters: Pharah can move while Barrage is active.",
          "Helix Shields: Convert 75 health to shields.",
        ],
        Reaper: [
          "Death's Shadow: Shadow Step reloads hellfire shotguns and has 25% increased range.",
          "Soul Reaving: Collect Soul Globes from dead enemies to restore 50 health.",
        ],
        Sojourn: [
          "Extended Mag: Maximum ammo increased by 15.",
          "Overcharged: Railgun's maximum energy is increased by 50 while Overclock is active.",
        ],
        "Soldier: 76": [
          "Recycled Pulse Munitions: Helix Rockets reload 15 ammo if they damage an enemy.",
          "Field Emergency: Biotic Field's healing is increased by 100% on critical health allies.",
        ],
        Sombra: [
          "Viral Efficacy: Virus' cooldown is reduced by 3 seconds when an enemy affected by Virus is eliminated.",
          "CTRL ALT ESC: Teleporting with Translocator while at critical health initiates passive health regeneration.",
        ],
        Symmetra: [
          "Sentry Capacity: Sentry Turret gains an additional charge.",
          "Advanced Teleportation: Teleporter's range is increased by 50%.",
        ],
        Torbjorn: [
          "Craftsman: Forge Hammer can restore armor health to allies. Turret repair's heal is increased by 25%.",
          "Fully Loaded: Activating Overload fully refills Rivet Gun's ammo.",
        ],
        Tracer: [
          "Blink Packs: Health Packs restore 1 Blink charge.",
          "Blast From the Past: Pulse Bomb's radius is increased by 50%.",
        ],
        Venture: [
          "Seismic Sense: While underground, Venture can sense enemies within 25 meters.",
          "Excavation Exhilaration: While Tectonic Shock is active, cooldowns refresh 300% faster.",
        ],
        Widowmaker: [
          "Scoped Efficiency: Scoped shots cost 3 ammo instead of 5.",
          "Focused Aim: Scoped shots charge 50% faster during Infra-Sight.",
        ],
        Freja: [
          "Frost Bolts: Enemies hit by 3 regular bolts in quick succession are slowed by 20% for 2 seconds.",
          "Tracking Instinct: Critical health enemies are revealed to you.",
        ],
      },
      major: {
        Ashe: [
          "Viper's Sting: Hitting 2 consecutive scoped shots on a target deals 25 extra damage and reloads 2 ammo.",
          "Airburst: Dynamite has a 40% increased detonation radius while airborne and refunds 3 ammo when thrown.",
        ],
        Bastion: [
          "Lindholm Explosives: Configuration: Assault's Weapon slowly fires explosive shells instead of a rotary cannon.",
          "Self-Repair: Press E to rapidly heal yourself.",
        ],
        Cassidy: [
          "Gun Slingin': Critical Hits with primary fire reduce the cooldown of Combat Roll by 3 seconds.",
          "Bang Bang: Cassidy throws a second Flashbang that travels farther, but both Flashbangs deal 30% reduced damage.",
        ],
        Echo: [
          "Full Salvo: Sticky Bombs fires 50% more projectiles, but all Sticky Bombs deal 15% less damage.",
          "High Beams: Focusing Beam eliminations reset Flight's cooldown.",
        ],
        Genji: [
          "Blade Twisting: Swift Strike deals 25 additional damage over time when used shortly after an elimination.",
          "Meditation: Regenerate 25 health per second while Deflect is active.",
        ],
        Hanzo: [
          "Dragon Fury: After hitting an enemy with primary fire, gain 25% attack speed for 1 second.",
          "Yamagami Technique: Wall Climb accelerates your Lunge cooldown by 250%.",
        ],
        Junkrat: [
          "Frag Cannon: Frag Launcher's projectile speed is increased by 40%, but its max ammo is reduced by 1.",
          "Tick Tock: Concussive Mine arms 0.5 seconds after landing, increasing damage by 50%, explosion radius by 50%, and health by 200%.",
        ],
        Mei: [
          "Biting Cold: Secondary fire hits slow enemies by 15% for 1.5 seconds, stacking up to 30%.",
          "Cryo-Storm: Cryo-Freeze slows and deals 70 damage per second to nearby enemies.",
        ],
        Pharah: [
          "Concussive Implosion: Concussive Blast's knockback is inverted to a pull-in.",
          "Fuel Stores: Jet Dash grants 50% fuel. Maximum overfuel is increased by 100%.",
        ],
        Reaper: [
          "Dire Triggers: Use (RMB) to fire a volley with long-range accuracy from both Hellfire shotguns.",
          "Ravenous Wraith: Leaving Wraith form grants 40% additional lifesteal for 3 seconds.",
        ],
        Sojourn: [
          "Dual Thrusters: Power Slide gains an additional charge and its jump height shifts to lateral movement.",
          "Adhesive Siphon: Disruptor Shot can stick to enemies and generates Railgun energy when dealing damage.",
        ],
        "Soldier: 76": [
          "Agility Training: Sprint's speed is increased by 20% and reload can be performed while Sprint is active.",
          "Stim Pack: Biotic Field can be used as a Stim Pack, increasing attack speed and reload speed by 30% while being unhealable for 4 seconds.",
        ],
        Sombra: [
          "White Hat: Hack can be used on allies to restore 100 health over 2 seconds.",
          "Stack Overflow: Hack's silence duration is increased by 100%, but its range is decreased by 30%.",
        ],
        Symmetra: [
          "Perfect Alignment: Primary fire's range increases by 15% with each additional charge level.",
          "Shield Battery: Symmetra regenerates 20 shields per second while within 10 meters of her Teleporter.",
        ],
        Torbjorn: [
          "Anchor Bolts: Deploy Turret's throw range is increased by 50%, and it can now attach to walls and ceilings.",
          "Overloaded Turret: Overload upgrades your Turret for 5 seconds, increasing its health and damage.",
        ],
        Tracer: [
          "Flashback: Recall restores all Blink charges.",
          "Quantum Entanglement: Recall grants 50 overhealth that decays over time.",
        ],
        Venture: [
          "SMART-R Excavator: SMART Excavator's range is increased by 25%.",
          "Covered in Dirt: Dealing damage with Clobber grants up to 30 Explorer's Resolve shields.",
        ],
        Widowmaker: [
          "Escape Plan: Scoped shot hits reduce Grappling Hook's cooldown by up to 4 seconds.",
          "Deadly Deux: Venom Mine gains 50% increased damage and a second charge, enabling two active mines at a time.",
        ],
        Freja: [
          "Ready to Hunt: Updraft grants a temporary free use of Quick Dash.",
          "Relentless Barrage: Direct hits with Take Aim refund 4 automatic bolt ammo.",
        ],
      },
    },
    support: {
      minor: {
        Ana: [
          "Groggy: Enemies waking up from Sleep Dart are slowed for 2 seconds.",
          "Biotic Bounce: After exploding, Biotic Grenade bounces and explodes again for 50 damage and healing.",
        ],
        Baptiste: [
          "Field Medicine: Immortality Field restores 80 health to nearby allies and 40 health to Baptiste when destroyed.",
          "Automated Healing: After placing Amplification Matrix, your Shoulder Turret periodically fires up to 12 shots at allies, each restoring 25 health.",
        ],
        Brigitte: [
          "Barrier Restoration: Shield Bash restores 100 health to Barrier Shield when it hits an enemy.",
          "Morale Boost: Inspire lasts 3 seconds longer when activated by Whip Shot.",
        ],
        Illari: [
          "Rapid Construction: Healing Pylon builds 300% faster and its cooldown is reduced by 1.5 seconds.",
          "Summer Solstice: Illari's flight time during Captive Sun is increased by 3 seconds and her flight speed is increased by 20%.",
        ],
        Kiriko: [
          "Urgent Care: Healing Ofuda projectile speed is increased by 50% when seeking critical health allies.",
          "Fortune Teller: Kunai hits launch 2 Healing Ofuda to an ally in front of you.",
        ],
        Lifeweaver: [
          "Cleansing Grasp: Life Grip cleanses negative effects.",
          "Life Cycle: While alive, regenerate 10 health per second. Upon death, drop a healing seed that heals allies for 250 health.",
        ],
        Lucio: [
          "Bass Blowout: Soundwave's knockback is increased by 15%.",
          "Groovin: Regenerate 4 ammo per second while wall riding.",
        ],
        Mercy: [
          "Angelic Recovery: Mercy receives 15 health per second while Caduceus Staff is attached to a full-health ally.",
          "Winged Reach: Guardian Angel's range is increased by 30%.",
        ],
        Moira: [
          "Vanish: Fade's duration is increased by 0.5 seconds.",
          "Uprush: Fade's jump height is increased by 50%.",
        ],
        Zenyatta: [
          "Zenith Kick: Snap Kick's knockback distance is increased by 30%.",
          "Ascendance: Activate and hold Double Jump to hover for up to 3 seconds.",
        ],
        Juno: [
          "Familiar Vitals: Pulsar Torpedoes lock onto allies 35% faster.",
          "Re-Boots: Activating Glide Boost resets Double Jump.",
        ],
      },
      major: {
        Ana: [
          "Headhunter: Biotic Rifle can crit enemies.",
          "Shrike: Using Nano Boost also casts it on Ana.",
        ],
        Baptiste: [
          "Assault Burst: Regenerative Burst grants Baptiste 20% attack speed for 4 seconds, but no longer instantly heals.",
          "Rocket Boots: While airborne from Exo Boots, use (SPACE) to dash horizontally.",
        ],
        Brigitte: [
          "Quick Fix: Repair Packs instantly heal an additional 35 health to critical health allies.",
          "Whip Lash: Whip Shot's knockback can slam enemies into walls, dealing 50 extra damage.",
        ],
        Illari: [
          "Solar Power: Fully-charged Solar Rifle hits grant 12.5% of your maximum solar energy, overfilling up to 50%.",
          "Sunburn: Outburst ignites enemies, dealing an additional 70 damage over 3 seconds.",
        ],
        Kiriko: [
          "Shuffling: Swift Step can be used again within 4 seconds of its initial cast.",
          "Foxtrot: Protection Suzu grants 40% movement speed to allies for 2 seconds.",
        ],
        Lifeweaver: [
          "Lifeweaving: Rejuvenating Dash adds 20 healing to your next Healing Blossom within 3 seconds.",
          "Superbloom: Thorns detonate for 30 extra damage when enough stick within 1.5 seconds.",
        ],
        Lucio: [
          "Noise Violation: Crossfade's range is increased by 150% while Amp It Up is active.",
          "Accelerando: Lucio's attack speed is increased by 50% while Amp It Up is active.",
        ],
        Mercy: [
          "Chain Boost: Secondary fire links to a second nearby ally.",
          "Flash Heal: Resurrect can be used on Caduceus Staff's active target to restore 150 health. Doing so incurs a 15-second cooldown.",
        ],
        Moira: [
          "Ethical Nourishment: Biotic Orb's first 50 healing is instant on each ally it encounters.",
          "Contamination: Enemies being damaged by Biotic Orb receive 25% reduced healing.",
        ],
        Zenyatta: [
          "Focused Destruction: Secondary fire charges 20% faster and can store 1 extra Orb of Destruction.",
          "Duality: Zenyatta heals Orb of Harmony targets for 20% of his damage dealt to Orb of Discord targets.",
        ],
        Juno: [
          "Master Blaster: Mediblaster can crit enemies.",
          "Locked On: Reduce the cooldown of Pulsar Torpedoes by 1.5 seconds for each enemy hit.",
        ],
      },
    },
  },

  tank: [
    {
      name: "D.Va",
      role: "tank",
      description:
        "A former pro gamer who now pilots a state-of-the-art mech in defense of her homeland.",
      image: "img/heroes/dva.png",
    },
    {
      name: "Doomfist",
      role: "tank",
      description:
        "A tactical leader who uses his powerful cybernetics to protect the innocent.",
      image: "img/heroes/doomfist.png",
    },
    {
      name: "Hazard",
      role: "tank",
      description: "A formidable frontline combatant.",
      image: "img/heroes/hazard.png",
      release_date: "TBA",
      base_of_operations: "TBA",
      affiliation: "TBA",
    },
    {
      name: "Junker Queen",
      role: "tank",
      description: "The ruthless, Australian-born ruler of Junkertown.",
      image: "img/heroes/junker-queen.png",
    },
    {
      name: "Mauga",
      role: "tank",
      description: "A fierce warrior who can brawl with the best of them.",
      image: "img/heroes/mauga.png",
    },
    {
      name: "Orisa",
      role: "tank",
      description:
        "A peacekeeping robot designed to protect the people of Numbani.",
      image: "img/heroes/orisa.png",
    },
    {
      name: "Ramattra",
      role: "tank",
      description: "A brilliant scientist who can manipulate gravity.",
      image: "img/heroes/ramattra.png",
    },
    {
      name: "Reinhardt",
      role: "tank",
      description:
        "A champion of a bygone age, who lives by a knightly code of honor.",
      image: "img/heroes/reinhardt.png",
    },
    {
      name: "Roadhog",
      role: "tank",
      description: "A ruthless killer with a love for destruction and chaos.",
      image: "img/heroes/roadhog.png",
    },
    {
      name: "Sigma",
      role: "tank",
      description: "An eccentric astrophysicist who can control gravity.",
      image: "img/heroes/sigma.png",
    },
    {
      name: "Winston",
      role: "tank",
      description:
        "A super-intelligent, genetically engineered gorilla who is a brilliant scientist and a champion for humanity's potential.",
      image: "img/heroes/winston.png",
    },
    {
      name: "Wrecking Ball",
      role: "tank",
      description: "Wrecking Ball rolls across the battlefield, using his arsenal of weapons and his mech's powerful body to crush his enemies.",
      image: "img/heroes/wrecking-ball.png",
      base_of_operations: "Junkertown, Australia (formerly)",
      release_date: "July 24, 2018",
      birthday: "Unknown",
      backstory: `Hammond is a brilliant, talkative, and adventurous hamster who was once a test subject at Horizon Lunar Colony. After an escape pod crash-landed in the Australian Outback, Hammond used his engineering skills to build a spherical mech from the wreckage. Now known as Wrecking Ball, he competes in the Scrapyard's brutal mech battles, using his intelligence and agility to outmaneuver opponents.`,
      abilities: [
        {
          name: "Role: Tank",
          description: "Reduces knockbacks and critical damage received. Less ultimate generated by healing and damage received.",
          icon: "../img/heroes/icons/tank-role.webp",
          video: "../videos/wrecking-ball/role-passive.mp4",
          type: "Passive Ability",
          stats: {
            Type: "Passive",
            "Base Health": "150",
            "Damage Reduction": "25% less damage taken from critical hits",
            "Knockback Reduction": "25% less knockback received",
            "Ultimate Charge Generation": "40% less from damage and healing"
          },
          notes: `<ul>
            <li>Effect Details:
              <ul>
                <li>Reduces the speed of knockbacks received by 25%</li>
                <li>Ultimate charge and perk progress generation from damage and healing dealt to heroes with the Tank passive is reduced by 40%</li>
                <li>Reduces the total damage received from critical hits, such as headshots, by 25%</li>
                <li>Weapons with a lower 1.5x headshot modifier ignore this damage reduction completely</li>
              </ul>
            </li>
            <li>Interactions:
              <ul>
                <li>Earthshatter and Overrun are affected by the damage reduction</li>
                <li>Virus and Volatile Chaingun's forced critical hits against burning targets are not affected</li>
                <li>The reduction stacks additively with other modifiers affecting damage taken</li>
              </ul>
            </li>
            <li>Gameplay Impact:
              <ul>
                <li>Provides additional survivability in team fights</li>
                <li>Makes Wrecking Ball more resistant to crowd control effects</li>
                <li>Encourages enemies to focus on body shots rather than headshots</li>
              </ul>
            </li>
          </ul>`
        },
        {
          name: "Quad Cannons",
          description: "Automatic assault weapons mounted on Wrecking Ball's mech.",
          icon: "../img/heroes/icons/wrecking-ball-quad-cannons.webp",
          video: "../videos/wrecking-ball/quad-cannons.mp4",
          type: "Primary Fire",
          stats: {
            Type: "Hitscan",
            "Damage": "5 - 1.5 per shot",
            "Falloff Range": "15 - 25 meters",
            "Headshot": "✓ (2x multiplier)",
            "Rate of Fire": "25 shots per second",
            "Ammo": "100",
            "Reload Time": "1.6 seconds",
            "Spread Angle": "2 degrees (max)",
            "Projectile Radius": "0.04 meters"
          },
          notes: `<ul>
            <li>Weapon Details:
              <ul>
                <li>Fully automatic quad-barreled machine guns</li>
                <li>First two shots have perfect accuracy</li>
                <li>Bullet spread reaches maximum at 30 shots</li>
                <li>0.16 second delay after releasing fire before it can be used again</li>
              </ul>
            </li>
            <li>Damage Output:
              <ul>
                <li>Damage per second: 125 while firing (83.33 overall with reload)</li>
                <li>Headshot damage: 10 - 3 per shot</li>
                <li>Time to empty clip: 4 seconds of continuous fire</li>
              </ul>
            </li>
            <li>Reload Mechanics:
              <ul>
                <li>Automatically reloads if Wrecking Ball is in Roll mode for 1.6 seconds</li>
                <li>Can be manually reloaded with standard reload keybind</li>
                <li>Reload is not interrupted by using abilities</li>
              </ul>
            </li>
            <li>Combat Tips:
              <ul>
                <li>Best used at medium range due to damage falloff</li>
                <li>Fire in short bursts for better accuracy</li>
                <li>Combine with mobility to stay in optimal range</li>
                <li>Use during Piledriver for aerial damage</li>
              </ul>
            </li>
            <li>Synergies:
              <ul>
                <li>Effective against airborne targets after Piledriver</li>
                <li>Good for finishing off weakened enemies after a grapple slam</li>
                <li>Can be used to destroy enemy shields and barriers</li>
              </ul>
            </li>
          </ul>`
        },
        {
          name: "Grappling Claw",
          description: "Launch a grappling claw to rapidly swing around the area, enabling high-speed collisions.",
          icon: "../img/heroes/icons/wrecking-ball-grappling-claw.webp",
          video: "../videos/wrecking-ball/grappling-claw.mp4",
          type: "Ability",
          cooldown: "5 seconds (after fireball), 1 second (no fireball)",
          stats: {
            Type: "Movement/Melee",
            "Damage": "60 (fireball collision)",
            "Max Range": "23 meters (max), 6 meters (retracted)",
            "Duration": "8 seconds (max grapple), 1.5s (fireball)",
            "Movement Speed": "9 m/s (retracting)",
            "Speed Buff": "+100% (max, grappling), +80% (released)",
            "Knockback Speed": "22 m/s"
          },
          notes: `<ul>
            <li>Activation & Mechanics:
              <ul>
                <li>Launches a grappling claw that attaches to surfaces</li>
                <li>Automatically enters Roll mode when used</li>
                <li>Can attach to walls and terrain objects (e.g., Petal Platform, Tree of Life)</li>
                <li>Cannot attach to ground surfaces or ramps (except stairs)</li>
              </ul>
            </li>
            <li>Fireball Mode:
              <ul>
                <li>Activates when moving at least 15 m/s while grappling</li>
                <li>Indicated by a fireball visual effect</li>
                <li>Colliding with enemies in fireball mode deals 60 damage and knockback</li>
                <li>Fireball lasts 1.5 seconds after releasing grapple</li>
              </ul>
            </li>
            <li>Cooldown Details:
              <ul>
                <li>5-second cooldown after using fireball</li>
                <li>1-second cooldown if fireball isn't activated</li>
                <li>Full cooldown if interrupted by crowd control</li>
              </ul>
            </li>
            <li>Advanced Techniques:
              <ul>
                <li>Hold Jump to retract the line manually</li>
                <li>Use with Piledriver for aerial slams</li>
                <li>Can be used to escape or engage fights quickly</li>
                <li>Practice wall jumps for maximum mobility</li>
              </ul>
            </li>
            <li>Counters & Interactions:
              <ul>
                <li>Interrupted by stuns, hacks, and mobility locks</li>
                <li>Can be used while Adaptive Shield is active</li>
                <li>Not affected by movement speed buffs/debuffs while grappling</li>
              </ul>
            </li>
          </ul>`
        },
        {
          name: "Roll",
          description: "Transform into a ball and increase maximum movement speed.",
          icon: "../img/heroes/icons/wrecking-ball-roll.webp",
          video: "../videos/wrecking-ball/roll.mp4",
          type: "Ability",
          cooldown: "0.4 seconds (transform into default form)",
          stats: {
            Type: "Movement",
            "Movement Speed": "10 m/s",
            "Cast Time": "0.4 seconds",
            "Directional Speed": "Same in all directions"
          },
          notes: `<ul>
            <li>Mechanics & Properties:
              <ul>
                <li>Transforms Wrecking Ball into a spherical form</li>
                <li>Base movement speed of 10 m/s in all directions</li>
                <li>No critical hitbox while in Roll form (no headshots)</li>
                <li>Automatically rolls downhill if not counteracted</li>
              </ul>
            </li>
            <li>Movement Details:
              <ul>
                <li>Same speed in all directions (no backward movement penalty)</li>
                <li>Gains speed when rolling downhill</li>
                <li>Maintains momentum when airborne</li>
                <li>Can be activated in midair</li>
              </ul>
            </li>
            <li>Interruptions:
              <ul>
                <li>Ends when hacked, slept, or hooked</li>
                <li>Ends when using primary fire or quick melee</li>
                <li>Ends when knocked down</li>
                <li>Cannot be activated while mobility locked</li>
              </ul>
            </li>
            <li>Strategic Uses:
              <ul>
                <li>Primary mode of transportation</li>
                <li>Essential for reaching high speeds with Grappling Claw</li>
                <li>Use to dodge enemy fire with unpredictable movement</li>
                <li>Maintain momentum around corners for maximum speed</li>
              </ul>
            </li>
            <li>Advanced Techniques:
              <ul>
                <li>Combine with Piledriver for aerial attacks</li>
                <li>Use terrain slopes to build and maintain speed</li>
                <li>Practice quick transformations for optimal combat flow</li>
                <li>Use to quickly reposition during team fights</li>
              </ul>
            </li>
          </ul>`
        },
        {
          name: "Adaptive Shield",
          description: "Create temporary extra health that increases with more nearby enemies. Can transfer some to allies.",
          icon: "../img/heroes/icons/wrecking-ball-adaptive-shield.webp",
          video: "../videos/wrecking-ball/adaptive-shield.mp4",
          type: "Ability",
          cooldown: "15 seconds",
          stats: {
            Type: "Area of Effect",
            "Base Overhealth": "100",
            "Per Enemy Bonus": "+100 (self)",
            "Ally Transfer": "-50 per ally (self), +75 (allies)",
            "Duration": "7 seconds (self), 4 seconds (allies)",
            "Radius": "8 meters",
            "Max Health Bonus": "+100% (with Pack Rat)"
          },
          notes: `<ul>
            <li>Activation & Mechanics:
              <ul>
                <li>Grants 100 overhealth plus 100 per enemy in range</li>
                <li>Can transfer up to 50 overhealth per nearby ally</li>
                <li>Allies receive 75 overhealth per transfer</li>
                <li>Shield decays over time</li>
              </ul>
            </li>
            <li>Strategic Uses:
              <ul>
                <li>Use before engaging in team fights</li>
                <li>Great for stalling objectives</li>
                <li>Can save allies in critical condition</li>
                <li>Use to bait out enemy cooldowns</li>
              </ul>
            </li>
            <li>Advanced Techniques:
              <ul>
                <li>Time activation with enemy focus fire</li>
                <li>Use to survive burst damage combos</li>
                <li>Position to maximize ally benefit</li>
                <li>Combine with Pack Rat for enhanced effectiveness</li>
              </ul>
            </li>
          </ul>`
        },
        {
          name: "Piledriver",
          description: "Slam into the ground below to damage and launch enemies upward.",
          icon: "../img/heroes/icons/wrecking-ball-piledriver.webp",
          video: "../videos/wrecking-ball/piledriver.mp4",
          type: "Ability",
          cooldown: "10 seconds",
          stats: {
            Type: "Area of Effect",
            "Damage": "20 - 100",
            "Max Damage Height": "10 meters",
            "Knockback": "Upward launch",
            "Area of Effect": "8 meter radius",
            "Cast Time": "0.6 seconds",
            "Duration": "0.6 seconds"
          },
          notes: `<ul>
            <li>Activation & Mechanics:
              <ul>
                <li>Must be in Roll form and airborne to activate</li>
                <li>Damage scales with height (max 100 at 10+ meters)</li>
                <li>Can hit enemies through barriers</li>
                <li>Cannot be used while hacked or rooted</li>
              </ul>
            </li>
            <li>Combo Potential:
              <ul>
                <li>Grapple → Swing → Piledriver → Primary Fire</li>
                <li>Use with Minefield for area denial</li>
                <li>Combine with Steamroller for bonus damage</li>
                <li>Sets up headshots for allies</li>
              </ul>
            </li>
            <li>Advanced Techniques:
              <ul>
                <li>Use environmental kills on certain maps</li>
                <li>Disrupt enemy formations</li>
                <li>Cancel reload animation with Piledriver</li>
                <li>Use to quickly descend from high ground</li>
              </ul>
            </li>
          </ul>`
        },
        {
          name: "Minefield",
          description: "Deploy a field of proximity mines that deal massive damage to enemies.",
          icon: "../img/heroes/icons/wrecking-ball-minefield.webp",
          video: "../videos/wrecking-ball/minefield.mp4",
          type: "Ultimate",
          cooldown: "Ultimate (1680 points)",
          stats: {
            Type: "Area Denial",
            "Damage": "130 per mine",
            "Number of Mines": "15",
            "Activation Delay": "1.1 seconds",
            "Mine Health": "50",
            "Duration": "20 seconds",
            "Area of Effect": "6 meter trigger radius, 10 meter damage radius"
          },
          notes: `<ul>
            <li>Activation & Mechanics:
              <ul>
                <li>Launches 15 mines in a spherical pattern</li>
                <li>Mines arm after 1.1 seconds</li>
                <li>Each mine deals 130 damage in a 10m radius</li>
                <li>Mines can be destroyed by enemy fire</li>
              </ul>
            </li>
            <li>Strategic Uses:
              <ul>
                <li>Zone control for objectives</li>
                <li>Combo with crowd control abilities</li>
                <li>Use in chokepoints for maximum effect</li>
                <li>Deny enemy escape routes</li>
              </ul>
            </li>
            <li>Advanced Techniques:
              <ul>
                <li>Deploy from high ground for better coverage</li>
                <li>Use with Piledriver to keep enemies in the minefield</li>
                <li>Time deployment with enemy cooldowns</li>
                <li>Use to split enemy teams</li>
              </ul>
            </li>
          </ul>`
        },
        {
          name: "Steamroller",
          description: "Increases Piledriver damage and knockback.",
          icon: "../img/heroes/icons/wrecking-ball-steamroller.webp",
          type: "Minor Perk",
          stats: {
            "Piledriver Damage Bonus": "+25%",
            "Knockback Increase": "+30%"
          },
          notes: `<ul>
            <li>Enhances Piledriver's effectiveness</li>
            <li>Great for environmental kills</li>
            <li>Increases combo potential</li>
          </ul>`
        },
        {
          name: "Pack Rat",
          description: "Increases duration and reduces decay rate of Adaptive Shield's overhealth.",
          icon: "../img/heroes/icons/wrecking-ball-pack-rat.webp",
          type: "Minor Perk",
          stats: {
            "Duration Increase": "+2 seconds",
            "Decay Rate Reduction": "-30%"
          },
          notes: `<ul>
            <li>Increases survivability</li>
            <li>Better sustain in prolonged fights</li>
            <li>More value from each shield use</li>
          </ul>`
        },
        {
          name: "Hang Time",
          description: "Enhances Grappling Claw's fireball mode duration, cooldown, and speed.",
          icon: "../img/heroes/icons/wrecking-ball-hang-time.webp",
          type: "Major Perk",
          stats: {
            "Fireball Duration": "+1 second",
            "Grapple Cooldown Reduction": "-2 seconds",
            "Movement Speed Bonus": "+10%"
          },
          notes: `<ul>
            <li>Increases mobility</li>
            <li>More opportunities for fireball attacks</li>
            <li>Better map control</li>
          </ul>`
        },
        {
          name: "Transfer Efficiency",
          description: "Improves Adaptive Shield's cooldown, shield amount, and transfer efficiency.",
          icon: "../img/heroes/icons/wrecking-ball-transfer-efficiency.webp",
          type: "Major Perk",
          stats: {
            "Cooldown Reduction": "-3 seconds",
            "Base Shield Increase": "+50",
            "Ally Transfer Efficiency": "+50%"
          },
          notes: `<ul>
            <li>More frequent shield usage</li>
            <li>Stronger personal protection</li>
            <li>Better team support</li>
          </ul>`
        }
      ]
    },
    {
      name: "Zarya",
      role: "tank",
      description:
        "One of the world's strongest women, a celebrated athlete who sacrificed personal glory to protect her family, friends, and country in a time of war.",
      image: "img/heroes/zarya.png",
      release_date: "2016-05-24",
      base_of_operations: "Krasnoyarsk Front, Russia",
      affiliation: "Russian Defensive Forces, Overwatch",
    },
  ],

  damage: [
    {
      name: "Ashe",
      role: "damage",
      description:
        "The ambitious and calculating leader of the Deadlock Gang and a respected figure in the criminal underworld.",
      image: "img/heroes/ashe.png",
      abilities: [
        {
          name: "The Viper",
          description:
            "Ashe's semi-automatic rifle. She can fire quick shots from the hip or aim down sights for more precise, damaging shots.",
          icon: "../img/heroes/icons/ashe-viper.png",
          video: "../videos/ashe/the-viper.mp4",
        },
        {
          name: "Coach Gun",
          description:
            "Ashe blasts enemies in front of her, knocking them back and propelling herself backward for added mobility.",
          icon: "../img/heroes/icons/ashe-coach-gun.png",
          video: "../videos/ashe/coach-gun.mp4",
        },
        {
          name: "Dynamite",
          description:
            "Ashe throws an explosive that detonates after a short delay or immediately when she shoots it. The explosion also lights enemies on fire, dealing damage over time.",
          icon: "../img/heroes/icons/ashe-dynamite.png",
          video: "../videos/ashe/dynamite.mp4",
        },
        {
          name: "B.O.B.",
          description:
            "Ashe summons her trusted omnic sidekick, B.O.B., who charges forward, knocks enemies into the air, and lays down suppressing fire with his arm cannons.",
          icon: "../img/heroes/icons/ashe-bob.png",
          video: "../videos/ashe/bob.mp4",
        },
      ],
    },
    {
      name: "Bastion",
      role: "damage",
      description:
        "A transforming robot that can switch between a mobile assault mode and a stationary turret configuration.",
      image: "img/heroes/bastion.png",
    },
    {
      name: "Cassidy",
      role: "damage",
      description: "A gunslinger who doles out justice on his own terms.",
      image: "img/heroes/cassidy.png",
    },
    {
      name: "Echo",
      role: "damage",
      description:
        "An evolutionary robot programmed with a rapidly adapting artificial intelligence, versatile enough to fill multiple battlefield roles.",
      image: "img/heroes/echo.png",
    },
    {
      name: "Freja",
      role: "damage",
      description: "A skilled hunter with ice abilities.",
      image: "img/heroes/freja.png",
      release_date: "TBA",
      base_of_operations: "TBA",
      affiliation: "TBA",
    },
    {
      name: "Genji",
      role: "damage",
      description:"A cyborg ninja who has made peace with the augmented body he once rejected.",
      image: "img/heroes/genji.png",
      base_of_operations:"Hanamura, Japan (formerly), Shambali Monastery, Nepal (formerly), Watchpoint: Gibraltar",
      release_date: "24 May 2016",
      birthday: "October 28 (Age:37)",
      backstory: `
        <strong>Story</strong><br>
        Once the carefree youngest son of the master of the Shimada ninja clan, Genji was cut down by his own brother for refusing to take part in their illegal ventures. Saved from death by Overwatch, he was transformed into a living weapon through cybernetic augmentation. Genji struggled with his new existence until he found peace with the omnic monk Zenyatta.
        
        <br><br><strong>SHIMADA CLAN</strong><br>
        As the youngest son of the master of the Shimada clan, Genji was raised in the art of the sword. He trained under swordmaster Asa Yamagami, forming a friendship with her young daughter Kiriko. Although he excelled at and enjoyed his ninja training, Genji had little interest in the family's illegal businesses and spent most of his time pursuing a playboy lifestyle. Many within the clan considered the carefree Genji to be a dangerous liability, and they resented his father for coddling and protecting him. Following the clan leader's untimely death, Genji's older brother, Hanzo, demanded that Genji take a more active role in their late father's empire. Genji refused, enraging Hanzo. The tension between the brothers built to a violent confrontation that left Genji on the verge of death.
        <br><br><strong>Blackwatch</strong><br>
        Hanzo believed that he had killed his brother, but Genji was rescued by Overwatch and the intervention of Dr. Angela Ziegler. The global security force saw Genji as a potential asset in its ongoing operations to combat the Shimada clan. As Genji's injuries left him clinging to life, Overwatch offered to rebuild his body in exchange for his help. He was put through an extensive process of cyberization, which enhanced his natural speed and agility and augmented his superlative ninja skills.Transformed into a living weapon, Genji joined Blackwatch and single-mindedly set about the task of dismantling his family's criminal empire. When this mission was complete, he moved on to more complex duties and even took part in the notorious Venice Incident, which led to Blackwatch’s public exposure and the team’s suspension.
        
        <br><br><strong>Overwatch</strong><br>
        Genji wasn’t sidelined for long, however. Overwatch leadership encouraged Genji to continue with agent training for the larger Overwatch strike team, and he graduated alongside Tracer and Winston. His efforts in both Havana and Singapore led Genji and his squad mates to successfully apprehend Doomfist, then the highest name on Overwatch’s most wanted list. But when Overwatch fell from grace, Genji felt increasingly at war with himself—all that had transpired between that fateful night in Hanamura and his life as an Overwatch agent. For the second time, he abandoned his former life and wandered the world in search of meaning. He drifted for many years before crossing paths with the omnic monk Zenyatta. In time, Zenyatta became his mentor, and under the monk's tutelage, Genji came to see both his experiences and his cybernetic form as a gift and a unique strength. The Shimada brothers would cross paths once again, on the anniversary of Genji’s death. In their former home of Shimada Castle, which had since been taken over by the Hashimoto clan, Genji revealed that he had survived their fateful encounter. Genji let his older brother know that he had forgiven him, but that Hanzo must walk the path of forgiving himself. Now the master of his own fate, Genji chooses to lend his skills to Overwatch once more, returning to aid a world in crisis alongside his former comrades and any who join their cause.      `,
      abilities: [
        {
          name: "Hero Passive: Cyber-Agility",
          description: "Climb on walls and double jump.",
          icon: "../img/heroes/icons/genji-cyber-agility.webp",
          video: "../videos/genji/cyber-agility.mp4",
          type: "Passive",
          effect: "Movement",
          stats: {
            Type: "Passive Ability",
            "Wall Climb":
              "Ends when player stops holding button or reaches wall's end",
            Duration: "Up to 1 second",
            "Movement speed": "7.8 meters per second(vertical).",
          },
          notes: `<ul>
            <li>Wall Climb ends when:
              <ul>
                <li>The player stops holding the button</li>
                <li>The wall ends</li>
                <li>The duration is up</li>
              </ul>
              It cannot be used again until Genji lands on a walkable surface.
            </li>
            <li>Genji will grab and mantle ledges if the input is held while facing a ledge of a walkable surface.
              <ul>
                <li>This does not count as starting Wall Climb</li>
                <li>Can be done even if Wall Climb was already used</li>
              </ul>
            </li>
            <li>Double jumping doesn't reset on wall climbing</li>
            <li>Maximum height capabilities:
              <ul>
                <li>Base: Up to 9.7m with wall climb</li>
                <li>With double jump: Up to 12.5m due to momentum preservation</li>
              </ul>
            </li>
            <li>Can be improved with the Minor perk: <a href='#minor-perk-acrobatics'>Acrobatics</a></li>
          </ul>`,
        },
        {
          name: "Shuriken",
          description: "Throw an accurate burst of 3 projectiles.",
          icon: "../img/heroes/icons/genji-shuriken.png",
          video: "../videos/genji/cyber-shuriken.mp4",
          rate_of_fire: "1.14 shots/s",
          stats: {
            Type: "Primary Fire",
            "Damage per shot": "27 per shuriken (81 per shot)",
            "Rate of fire": "1.14 shots per second",
            "Ammo Consumption": "<br>3 per shot",
            Ammo: "24",
            "Reload time": "1.5 seconds animation",
            "Unscoped accuracy": "Projectile",
            "Projectile speed": "75 meters per second",
            "Projectile radius": "0,175 meters",
          },
          notes: `<ul>
            <li>Damage per second:
              <ul>
                <li>While firing: 92.05 DPS</li>
                <li>Overall (with reload): 85.94 DPS</li>
              </ul>
            </li>
            <li>Quick melee cancels fire recovery</li>
            <li>Can be deflected by <a href='#deflect'>Deflect</a> ability</li>
            <li>Projectile properties:
              <ul>
                <li>Travels in a straight line</li>
                <li>No damage falloff at range</li>
                <li>Requires leading moving targets</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Shuriken Alternate Fire",
          description: "Throw a fan of 3 projectiles in an arc.",
          icon: "../img/heroes/icons/genji-shuriken.png",
          video: "../videos/genji/shuriken-2.mp4",
          type: "Secondary Fire",
          stats: {
            Type: "Secondary Fire",
            "Damage per shot": "27 per shuriken (81 per shot)",
            "Rate of fire": "1.47 shots per second",
            "Ammo Consumption": "<br>3 per shot",
            Ammo: "24",
            "Reload time": "1.5 seconds animation",
            "Unscoped accuracy": "Projectile, 4.5 degrees spread angle",
            "Projectile speed": "75 meters per second",
            "Projectile radius": "0,175 meters",
          },
          notes: `<ul>
            <li>Damage per second:
              <ul>
                <li>While firing: 119.12 DPS</li>
                <li>Overall (with reload): 109.09 DPS</li>
              </ul>
            </li>
            <li>Also known as "Fan of Blades"</li>
            <li>Fires three shurikens in a spread pattern, even if fewer than three remain in the magazine</li>
            <li>Quick melee cancels fire recovery animation</li>
            <li>Projectile properties:
              <ul>
                <li>Travels in a spread pattern (4.5° spread angle)</li>
                <li>No damage falloff at range</li>
                <li>Effective at close to medium range</li>
              </ul>
            </li>
            <li>Can be deflected by <a href='#deflect'>Deflect</a> ability</li>
          </ul>`,
        },
        {
          name: "Swift Strike",
          description:
            "Rapidly dash forward and inflict damage on enemies. Eliminations reset the cooldown.",
          icon: "../img/heroes/icons/genji-swift-strike.webp",
          video: "../videos/genji/swift-strike.mp4",
          type: "Ability",
          stats: {
            Type: "Ability",
            Duration: "0.4 seconds",
            Damage: "50",
            "Movement speed": "50 meters per second",
            Cooldown: "8 seconds",
          },
          notes: `<ul>
            <li>Cooldown mechanics:
              <ul>
                <li>Resets on any elimination, regardless of which ability secured the kill</li>
                <li>Automatically resets when activating <a href='#dragonblade'>Dragonblade</a></li>
              </ul>
            </li>
            <li>Damage properties:
              <ul>
                <li>Deals 50 damage to all enemies in path</li>
                <li>Cannot damage traps (e.g., <a href='junkrat.html#steel-trap'>Junkrat's Steel Trap</a>, <a href='widowmaker.html#venom-mine'>Widowmaker's Venom Mine</a>)</li>
              </ul>
            </li>
            <li>Visual changes:
              <ul>
                <li>Uses katana animation during <a href='#dragonblade'>Dragonblade</a></li>
              </ul>
            </li>
             <li>Advanced techniques:
              <ul>
                <li>Ghost Dashing is a technique that allows Genji to engage and disengage very quickly by dashing on a target and instantly dashing again to either deal more damage or get out</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Deflect",
          description:
            "Deflect incoming projectiles towards the direction you are aiming and block melee attacks.",
          icon: "../img/heroes/icons/genji-deflect.webp",
          video: "../videos/genji/deflect.mp4",
          type: "Ability",
          stats: {
            Type: "Ability",
            Duration:
              "<br>0.27 min duration<br>2 seconds max. duration<br>0.192 seconds recovery",
            Cooldown: "8 seconds",
            "Area of effect": "<br>~1 meter width<br>~2 meter height",
          },
          notes: `<ul>
            <li>Changing the direction of the character's gaze (and hence the reflection zone) takes time. It takes ~0.14 seconds to be able to deflect something that was exactly behind you.</li>
            <li>Can be cancelled manually. If you cancel Deflect with wall climb, the recovery will not be activated.</li>
            <li>The hitbox extends to cover Genji's sides, but only attacks coming from less than 90° of the direction Genji is facing are affected.</li>
            <li>Any projectile reflected is treated as Genji's, and its damage falloff is reset.</li>
            <li>Reflected projectiles apply the Damage role passive even if they were originally from a non-damage hero.</li>
            <li>Blocks melee attacks and melee-like projectiles, such as:
              <ul>
                <li><a href='roadhog.html#hook'>Roadhog's Chain Hook</a></li>
                <li><a href='brigitte.html#whip-shot'>Brigitte's Whip Shot</a></li>
              </ul>
            </li>
            <li>Cannot block beams or AoE attacks, including:
              <ul>
                <li><a href='mei.html#endothermic-blaster'>Mei's Endothermic Blaster</a> (primary fire)</li>
                <li><a href='winston.html#tesla-cannon'>Winston's Tesla Cannon</a> (primary and secondary fire)</li>
                <li><a href='moira.html#biotic-grasp'>Moira's Biotic Grasp</a> (primary fire)</li>
              </ul>
            </li>
            <li>Can deflect certain healing abilities:
              <ul>
                <li><a href='ana.html#biotic-grenade'>Ana's Biotic Grenade</a></li>
                <li><a href='illari.html#healing-blossom'>Illari's Healing Blossom</a></li>
                <li><a href='moira.html#biotic-orb'>Moira's Biotic Orb</a> (Healing variant)</li>
                <li><a href='kiriko.html#healing-ofuda'>Kiriko's Healing Ofuda</a></li>
                <li><a href='illari.html#healing-pylon'>Illari's Healing Pylon projectiles</a></li>
              </ul>
            </li>
            <li>Cannot deflect:
              <ul>
                <li><a href='brigitte.html#repair-pack'>Brigitte's Repair Pack</a></li>
                <li><a href='baptiste.html#immortality-field'>Baptiste's Immortality Field</a></li>
              </ul>
            </li>
            <li>Certain projectiles are unaffected by Deflect, including:
              <ul>
                <li><a href='sigma.html#accretion'>Sigma's Accretion</a> (will knock Genji out of Deflect)</li>
                <li><a href='zarya.html#particle-cannon'>Zarya's Particle Cannon</a> (primary fire)</li>
                <li><a href='symmetra.html#photon-projector'>Symmetra's Photon Projector</a> (primary fire)</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Dragonblade",
          description: "Unleash a deadly melee weapon for a short duration.",
          icon: "../img/heroes/icons/genji-dragonblade.webp",
          video: "../videos/genji/dragonblade.mp4",
          type: "Ultimate",
          stats: {
            Type: "Ultimate",
            Duration: "6 seconds",
            Damage: "110 per swing",
            "Rate of fire": "1.437 swings per second on average",
            Cost: "2125 points",
            "Movement speed buff": "+30%",
            "Max range": "5 meters",
          },
          notes: `<ul>
            <li>Swing mechanics:
              <ul>
                <li>Right to left swing: 0.224s startup, 0.48s recovery</li>
                <li>Left to right swing: 0.128s startup, 0.56s recovery</li>
                <li>Damage per second: 158.05 while swinging continuously</li>
                <li>Can perform up to 9 swings normally, 10 with <a href='#swift-strike'>Swift Strike</a> animation cancels</li>
              </ul>
            </li>
            <li>Ability interactions:
              <ul>
                <li>Resets <a href='#swift-strike'>Swift Strike</a> cooldown on activation</li>
                <li>Replaces Shuriken attacks while active</li>
                <li>Shuriken ammunition is fully restored after Dragonblade ends</li>
              </ul>
            </li>
            <li>Advanced techniques:
              <ul>
                <li>Use <a href='#swift-strike'>Swift Strike</a> to cancel swing recovery animations</li>
                <li>Sheathing animation is skipped if ending with a dash or wall climb</li>
              </ul>
            </li>
            <li>Tips for maximum effectiveness:
              <ul>
                <li>Use <a href='#deflect'>Deflect</a> for protection when engaging</li>
                <li>Save <a href='#swift-strike'>Swift Strike</a> for finishing low-health targets</li>
                <li>Be mindful of enemy crowd control abilities</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Minor Perk: Acrobatics",
          description: "Swift Strike and Wall Climb resets double jump.",
          icon: "../img/heroes/icons/genji-acrobatics.webp",
          video: "../videos/genji/acrobatics.mp4",
          stats: {
            Type: "Minor Perk",
            "Double jump reset": "Swift Strike and Wall Climb",
          },
          notes: `<ul>
            <li>Effect Details:
              <ul>
                <li>Swift Strike and Wall Climb reset double jump</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Minor Perk: Dragon's Thirst",
          description: "Dragonblade swings gain 30% lifesteal.",
          icon: "../img/heroes/icons/genji-dragons-thirst.webp",
          video: "../videos/genji/dragons-thirst.mp4",
          stats: {
            Type: "Minor Perk",
            "Lifesteal": "30%",
          },
          notes: `<ul>
            <li>Effect Details:
              <ul>
                <li>Dragonblade swings gain 30% lifesteal</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Major Perk: Blade Twisting",
          description: "Swift Strike deals 25 additional damage over time when used shortly after an elimination.",
          icon: "../img/heroes/icons/genji-blade-twisting.webp",
          video: "../videos/genji/blade-twisting.mp4",
          stats: {
            Type: "Major Perk",
            "Additional damage": "25",
            "Duration": "<br>1 second (damage over time)",
            "Trigger": "<br>10 seconds trigger window",
          },
          notes: `<ul>
            <li>Effect Details:
              <ul>
                <li>Swift Strike deals 25 additional damage over time when used shortly after an elimination</li>
                <li>Trigger window: 10 seconds</li>
                <li>Duration: 1 second (damage over time)</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Major Perk: Meditation",
          description: "Regenerate 35 health per second while Deflect is active.",
          icon: "../img/heroes/icons/genji-meditation.png",
          video: "../videos/genji/meditation.mp4",
          stats: {
            Type: "Major Perk",
            "Health regeneration": "35 per second",
          },
          notes: `<ul>
            <li>Effect Details:
              <ul>
                <li>Regenerate 35 health per second while Deflect is active</li>
              </ul>
            </li>
          </ul>`,
        },
      ],
    },
    {
      name: "Hanzo",
      role: "damage",
      description: "A deadly bowman and assassin without peer.",
      image: "img/heroes/hanzo.png",
      base_of_operations: "Hanamura, Japan (formerly)",
      release_date: "24 May 2016",
      birthday: "November 3 (Age: 40)",
      backstory: `
        <strong>Story</strong><br>
        Master archer Hanzo Shimada strives to perfect his skills as a warrior. Once heir to the Shimada clan's criminal empire, he now fights as a mercenary, unable to escape the violent legacy of his family's past.
        
        <br><br><strong>SHIMADA CLAN</strong><br>
        The Shimada family was established centuries ago, a dynasty of assassins whose power grew through the illegal weapons and drug trade. As the eldest son of the clan's leader, Hanzo was bound by duty to inherit the Shimada empire. He was trained from an early age to become a warrior, displaying natural talent that earned his father's favor but also the jealousy of his younger brother, Genji. The tension between the brothers built to a violent confrontation that left Genji on the verge of death.
        
        <br><br><strong>EXILE</strong><br>
        After the death of his father, and shamed by his actions against Genji, Hanzo abandoned the clan, wandering the world in self-imposed exile. He sought to restore his honor by perfecting his skills as a warrior. He eventually became a mercenary, selling his bow to the highest bidder while struggling to come to terms with his past.
      `,
      abilities: [
        {
          name: "Hero Passive: Wall Climb",
          description: "Jump at walls to climb up them.",
          icon: "../img/heroes/icons/hanzo-wall-climb.webp",
          video: "../videos/hanzo/wall-climb.mp4",
          type: "Passive",
          effect: "Movement",
          stats: {
            Type: "Passive Ability",
            "Wall Climb": "Ends when player stops holding button or reaches wall's end",
            Duration: "Up to 1 second",
            "Movement speed": "7.15 meters per second (vertical)",
          },
          notes: `<ul>
            <li>Wall Climb ends when:
              <ul>
                <li>The player stops holding the button</li>
                <li>The wall ends</li>
                <li>The duration is up</li>
              </ul>
              It cannot be used again until Hanzo lands on a walkable surface.
            </li>
            <li>Hanzo will grab and mantle ledges if the input is held while facing a ledge of a walkable surface.
              <ul>
                <li>This does not count as starting Wall Climb</li>
                <li>Can be done even if Wall Climb was already used</li>
              </ul>
            </li>
            <li>Can reach up to 8.8m height (10m with Lunge) due to momentum being kept after Wall Climb ends.</li>
          </ul>`,
        },
        {
          name: "Hero Passive: Damage Role",
          description: "Damaging an enemy temporarily reduces their healing received.",
          icon: "../img/heroes/icons/damage-role.webp",
          stats: {
            Type: "Role Passive",
            "Healing reduction (non-tanks)": "-30%",
            "Healing reduction (tanks)": "-15%",
            Duration: "2 seconds",
          },
          notes: `<ul>
            <li>Effect Details:
              <ul>
                <li>Does not stack with itself or the passive from another damage role hero</li>
                <li>Stacks multiplicatively with other modifiers that affect healing received</li>
                <li>Objects that deal damage, such as turrets, may also apply the effect</li>
                <li>Self-damage does not apply the effect</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Storm Bow",
          description: "Hold to charge then release to launch arrows further.",
          icon: "../img/heroes/icons/hanzo-storm-bow.webp",
          video: "../videos/hanzo/storm-bow.mp4",
          type: "Primary Fire",
          stats: {
            Type: "Primary Fire",
            "Damage": "25 (min charge) - 125 (max charge)",
            "Headshot": "✓ (x2)",
            "Rate of fire": "0.82 shots/s (max charge), 2 shots/s (min charge)",
            "Ammo": "∞",
            "Movement speed penalty": "-30%",
            "Projectile speed": "25-110 m/s (scales with charge)",
            "Projectile radius": "0.125 meters",
          },
          notes: `<ul>
            <li>Damage per second:
              <ul>
                <li>Full charge: 102.46 DPS</li>
                <li>Minimum charge: 50 DPS</li>
              </ul>
            </li>
            <li>Charge mechanics:
              <ul>
                <li>Takes 0.72 seconds to reach maximum draw</li>
                <li>Draw can be held indefinitely</li>
                <li>Draw progress is preserved while wall climbing</li>
              </ul>
            </li>
            <li>Minimum draw times for one-shot eliminations (headshot):
              <ul>
                <li>150 HP: ~0.43s</li>
                <li>175 HP: ~0.50s</li>
                <li>200 HP: ~0.58s</li>
                <li>225 HP: ~0.65s</li>
                <li>250 HP: 0.72s (full charge)</li>
              </ul>
            </li>
            <li>Projectile properties:
              <ul>
                <li>Travels in an arc (affected by gravity)</li>
                <li>No damage falloff at range</li>
                <li>Requires leading moving targets</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Sonic Arrow",
          description: "Launch an arrow that reveals enemies in its line of sight for a short time.",
          icon: "../img/heroes/icons/hanzo-sonic-arrow.webp",
          video: "../videos/hanzo/sonic-arrow.mp4",
          type: "Ability",
          stats: {
            Type: "Ability",
            "Cooldown": "12 seconds",
            "Duration": "6 seconds",
            "Area of effect": "9 meter vision radius",
            "Headshot": "✓ (x2)",
            "Projectile speed": "Same as Storm Arrow"
          },
          notes: `<ul>
            <li>Activation:
              <ul>
                <li>Pressing the ability key turns the next arrow from Storm Bow or Storm Arrows into a Sonic Arrow</li>
                <li>Does not change the speed, damage, or projectile radius of the arrow</li>
                <li>Pressing the key again before firing changes it back to a normal arrow</li>
              </ul>
            </li>
            <li>Cooldown starts when the arrow is fired</li>
            <li>Revealed enemies are visible through walls to Hanzo and his team</li>
            <li>If the arrow sticks to a moving target, the effect follows them</li>
            <li>If the target becomes invalid (destroyed, retracted, or cleansed), the arrow falls off but continues its effect at that location</li>
            <li>Enemies can see and hear the Sonic Arrow's effect when nearby</li>
            <li>Synergies:
              <ul>
                <li>Great for scouting high-traffic areas before engaging</li>
                <li>Useful for tracking enemy movements through walls</li>
                <li>Can be combined with Dragonstrike for wall-piercing damage</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Storm Arrows",
          description: "The next 5 arrows fire instantly at reduced damage and can ricochet.",
          icon: "../img/heroes/icons/hanzo-storm-arrows.webp",
          video: "../videos/hanzo/storm-arrows.mp4",
          type: "Ability",
          stats: {
            Type: "Ability",
            "Cooldown": "8 seconds (starts when ability ends)",
            "Duration": "Up to 5 seconds",
            "Arrows": "5",
            "Damage per arrow": "75",
            "Headshot": "✓ (x2)",
            "Rate of fire": "4 arrows/second",
            "Projectile speed": "140 m/s",
            "Projectile radius": "0.2 meters"
          },
          notes: `<ul>
            <li>Activation:
              <ul>
                <li>Instantly equips 5 rapid-fire arrows</li>
                <li>Arrows fire immediately upon release (no charge needed)</li>
                <li>Can be manually cancelled by pressing the ability key again</li>
              </ul>
            </li>
            <li>Damage output:
              <ul>
                <li>Total potential damage: 375 (75 × 5)</li>
                <li>Headshot potential: 150 per arrow (300% of base damage)</li>
                <li>DPS while firing: ~300 damage per second</li>
              </ul>
            </li>
            <li>Projectile properties:
              <ul>
                <li>Arrows travel in a straight line (no arc)</li>
                <li>Each arrow can ricochet once off surfaces</li>
                <li>No damage falloff at range</li>
              </ul>
            </li>
            <li>Interaction with other abilities:
              <ul>
                <li>Can be combined with Sonic Arrow (the next arrow becomes a Sonic Arrow)</li>
                <li>If a Sonic Arrow is fired during Storm Arrows, it will stick after ricocheting once</li>
              </ul>
            </li>
            <li>Tips for maximum effectiveness:
              <ul>
                <li>Use for burst damage against tanks or barriers</li>
                <li>Effective at all ranges due to no damage falloff</li>
                <li>Great for finishing off low-health targets</li>
                <li>Can be used to quickly break shields or turrets</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Lunge",
          description: "Perform a double jump in mid-air.",
          icon: "../img/heroes/icons/hanzo-lunge.webp",
          video: "../videos/hanzo/lunge.mp4",
          type: "Ability",
          stats: {
            Type: "Ability",
            "Cooldown": "4 seconds",
            "Max. range": "7.85 meters",
            "Movement speed": "15.66 m/s"
          },
          notes: `<ul>
            <li>Activation:
              <ul>
                <li>Press jump while in the air to perform a second jump</li>
                <li>Can be used after Wall Climb for additional height and distance</li>
              </ul>
            </li>
            <li>Movement properties:
              <ul>
                <li>Can be used in any direction</li>
                <li>Maintains momentum from previous movements</li>
                <li>Can be used to reach high ground or cross gaps</li>
              </ul>
            </li>
            <li>Advanced techniques:
              <ul>
                <li>Combine with Wall Climb for maximum vertical mobility</li>
                <li>Use to dodge enemy attacks or reposition during fights</li>
                <li>Can be used to reach otherwise inaccessible locations</li>
              </ul>
            </li>
            <li>Synergies:
              <ul>
                <li>Allows Hanzo to reach high ground for better sightlines</li>
                <li>Can be used to escape dangerous situations</li>
                <li>Great for repositioning during Dragonstrike</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Dragonstrike",
          description: "Launch a deadly Dragon Spirit that devastates enemies it passes through.",
          icon: "../img/heroes/icons/hanzo-dragonstrike.webp",
          video: "../videos/hanzo/dragonstrike.mp4",
          type: "Ultimate",
          stats: {
            Type: "Ultimate Ability",
            "Ultimate Cost": "1700 points",
            "Initial Arrow Damage": "125",
            "Dragon Damage": "200 per second",
            "Cast Time": "0.94 seconds",
            "Duration": "0.5 seconds (initial arrow)",
            "Max Range": "10 meters (initial arrow)",
            "Dragon Range": "Infinite",
            "Area of Effect": "4 meter radius, 40 meter length (dragons)",
            "Projectile Speed": "20 m/s (initial arrow), 15 m/s (dragons)",
            "Projectile Radius": "0.175 meters"
          },
          notes: `<ul>
            <li>Activation:
              <ul>
                <li>Hanzo summons a Spirit Dragon that travels through the air in a line</li>
                <li>Can be fired in any direction, including vertically</li>
                <li>Dragons last for 6 seconds or until they hit the map boundary</li>
              </ul>
            </li>
            <li>Damage mechanics:
              <ul>
                <li>Initial arrow deals 125 damage and can headshot (2x multiplier)</li>
                <li>Dragons deal 200 damage per second to enemies in their path</li>
                <li>Maximum potential damage: 125 (initial) + 1200 (dragons) = 1325 damage</li>
                <li>Damage is dealt in 0.5 second intervals (100 damage per tick)</li>
              </ul>
            </li>
            <li>Special properties:
              <ul>
                <li>Dragons pass through all barriers, shields, and terrain</li>
                <li>Can hit multiple enemies simultaneously</li>
                <li>Dragons persist even if Hanzo is eliminated after casting</li>
              </ul>
            </li>
            <li>Interactions:
              <ul>
                <li>Initial arrow can be deflected by <a href='genji.html#deflect'>Genji's Deflect</a></li>
                <li>Initial arrow can be absorbed by <a href='sigma.html#kinetic-grasp'>Sigma's Kinetic Grasp</a> and <a href='dva.html#defense-matrix'>D.Va's Defense Matrix</a></li>
                <li>Dragons are unaffected by any abilities once summoned</li>
              </ul>
            </li>
            <li>Advanced techniques:
              <ul>
                <li>Use from high ground for better visibility and control</li>
                <li>Combine with Sonic Arrow to track enemies through walls</li>
                <li>Can be used to zone enemies away from objectives or choke points</li>
                <li>Effective against stationary targets like Bastion in turret form</li>
              </ul>
            </li>
            <li>Ultimate charge:
              <ul>
                <li>Hanzo can gain ultimate charge while Dragonstrike is active</li>
                <li>Damage dealt by Dragonstrike does not generate ultimate charge</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Minor Perk: Sonic Disruption",
          description: "Sonic Arrow hacks nearby Health Packs for 30 seconds.",
          icon: "../img/heroes/icons/hanzo-sonic-disruption.webp",
          video: "../videos/hanzo/sonic-disruption.mp4",
          type: "Minor Perk",
          stats: {
            Type: "Minor Perk",
            "Effect": "Hacks nearby health packs",
            "Duration": "30 seconds",
            "Cooldown": "Same as Sonic Arrow"
          },
          notes: `<ul>
            <li>Effect Details:
              <ul>
                <li>Hacks all health packs within 20 meters of Sonic Arrow's impact point</li>
                <li>Hacked health packs respawn 4x faster for Hanzo's team</li>
                <li>Enemies cannot use hacked health packs</li>
                <li>Hacked health packs are visible through walls to Hanzo's team</li>
              </ul>
            </li>
            <li>Visual indicators:
              <ul>
                <li>Hacked health packs glow purple</li>
                <li>Enemies can see that health packs have been hacked</li>
              </ul>
            </li>
            <li>Strategic value:
              <ul>
                <li>Denies enemy healers ultimate charge from healing</li>
                <li>Gives your team a healing advantage in the area</li>
                <li>Great for controlling key map areas with health packs</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Minor Perk: Scatter Arrows",
          description: "Storm Arrows split into 3 projectiles on first ricochet and bounce 2 extra times.",
          icon: "../img/heroes/icons/hanzo-scatter-arrows.webp",
          video: "../videos/hanzo/scatter-arrows.mp4",
          type: "Minor Perk",
          stats: {
            Type: "Minor Perk",
            "Damage per split arrow": "25",
            "Total arrows after split": "3",
            "Additional bounces": "2"
          },
          notes: `<ul>
            <li>Effect Details:
              <ul>
                <li>Each Storm Arrow splits into 3 arrows on first ricochet</li>
                <li>Split arrows deal reduced damage (25 each, down from 75)</li>
                <li>Split arrows can bounce 2 additional times (3 bounces total)</li>
                <li>Split arrows cannot headshot</li>
              </ul>
            </li>
            <li>Best used in:
              <ul>
                <li>Confined spaces with many surfaces</li>
                <li>Against grouped-up enemies</li>
                <li>For area denial in chokepoints</li>
              </ul>
            </li>
            <li>Damage potential:
              <ul>
                <li>Maximum single-target damage: 225 (75 + 3×50)</li>
                <li>Maximum theoretical damage: 1125 (5 arrows × 225)</li>
              </ul>
            </li>
            <li>Synergies:
              <ul>
                <li>More effective with good map knowledge</li>
                <li>Pairs well with Sonic Arrow for wallhacks</li>
                <li>Great for finishing off low-health targets around corners</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Major Perk: Dragon Fury",
          description: "After hitting an enemy with Primary Fire, gain 25% attack speed for 2 seconds.",
          icon: "../img/heroes/icons/hanzo-dragon-fury.webp",
          video: "../videos/hanzo/dragon-fury.mp4",
          type: "Major Perk",
          stats: {
            Type: "Major Perk",
            "Attack Speed Increase": "25%",
            "Duration": "2 seconds",
            "Trigger": "On successful hit with Primary Fire"
          },
          notes: `<ul>
            <li>Effect Details:
              <ul>
                <li>Activated by hitting any enemy with a fully or partially charged arrow</li>
                <li>Effect duration refreshes with each successful hit</li>
                <li>Does not stack with itself</li>
                <li>Affects both Storm Bow and Storm Arrows</li>
              </ul>
            </li>
            <li>Impact on DPS:
              <ul>
                <li>Increases maximum charge rate from 0.82 to ~1.03 shots/second</li>
                <li>Increases DPS from 102.5 to ~128.1 with fully charged shots</li>
                <li>More noticeable with Storm Arrows, allowing faster follow-up shots</li>
              </ul>
            </li>
            <li>Strategic value:
              <ul>
                <li>Great for sustained fights where you can maintain accuracy</li>
                <li>Helps secure eliminations on low-health targets</li>
                <li>More effective against tanks and barriers</li>
                <li>Synergizes well with headshot-focused playstyle</li>
              </ul>
            </li>
            <li>Tips for maximum effectiveness:
              <ul>
                <li>Aim for consistent accuracy to maintain the buff</li>
                <li>Use cover between shots to maintain the buff safely</li>
                <li>Excellent for shield break scenarios</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Major Perk: Yamagami Technique",
          description: "Wall Climb accelerates your Lunge cooldown by 300%.",
          icon: "../img/heroes/icons/hanzo-yamagami-technique.webp",
          video: "../videos/hanzo/yamagami-technique.mp4",
          type: "Major Perk",
          stats: {
            Type: "Major Perk",
            "Cooldown Reduction": "300% faster",
            "Base Cooldown": "4 seconds",
            "Reduced Cooldown While Climbing": "~1.33 seconds"
          },
          notes: `<ul>
            <li>Effect Details:
              <ul>
                <li>Lunge cooldown recharges 4x faster while Wall Climb is active</li>
                <li>Allows for near-constant vertical mobility</li>
                <li>No effect when not wall climbing</li>
              </ul>
            </li>
            <li>Mobility benefits:
              <ul>
                <li>Enables rapid vertical ascension</li>
                <li>Allows for quick repositioning during fights</li>
                <li>Great for reaching high ground quickly</li>
                <li>Makes Hanzo much harder to pin down</li>
              </ul>
            </li>
            <li>Advanced techniques:
              <ul>
                <li>Chain Wall Climb and Lunge for maximum height</li>
                <li>Use to quickly peek over ledges and fire</li>
                <li>Excellent for escaping dangerous situations</li>
                <li>Allows for aggressive positioning with an escape plan</li>
              </ul>
            </li>
            <li>Map advantages:
              <ul>
                <li>More effective on maps with verticality</li>
                <li>Great for accessing unexpected angles</li>
                <li>Allows for quick rotations between high grounds</li>
              </ul>
            </li>
          </ul>`,
        },
      ],
    },
    {
      name: "Junkrat",
      role: "damage",
      description:
        "An explosives-obsessed demolitionist who lives to cause chaos and destruction.",
      image: "img/heroes/junkrat.png",
    },
    {
      name: "Mei",
      role: "damage",
      description:
        "A specialist in weather manipulation who has taken up the fight to preserve the environment.",
      image: "img/heroes/mei.png",
    },
    {
      name: "Pharah",
      role: "damage",
      description:
        "A decorated soldier who patrols the skies in her experimental Raptora combat suit.",
      image: "img/heroes/pharah.png",
    },
    {
      name: "Reaper",
      role: "damage",
      description:
        "A mercenary and terrorist, clad in black, who haunts the battlefields of the world like a wraith.",
      image: "img/heroes/reaper.png",
    },
    {
      name: "Sojourn",
      role: "damage",
      description:
        "A former captain of Overwatch with cybernetic capabilities.",
      image: "img/heroes/sojourn.png",
    },
    {
      name: "Soldier: 76",
      role: "damage",
      description:
        "A vigilante who will stop at nothing to bring the enemies of Overwatch to justice.",
      image: "img/heroes/soldier-76.png",
    },
    {
      name: "Sombra",
      role: "damage",
      description:
        "One of the world's most notorious hackers, Sombra uses information to manipulate those in power.",
      image: "img/heroes/sombra.png",
    },
    {
      name: "Symmetra",
      role: "damage",
      description:
        "An architect who can bend reality to her will, creating structures and weapons from hard-light.",
      image: "img/heroes/symmetra.png",
    },
    {
      name: "Torbjorn",
      role: "damage",
      description:
        "An expert weapons designer who creates advanced weaponry and automated turrets.",
      image: "img/heroes/torbjorn.png",
    },
    {
      name: "Tracer",
      role: "damage",
      description:
        "A time-jumping adventurer and an irrepressible force for good.",
      image: "img/heroes/tracer.png",
    },
    {
      name: "Venture",
      role: "damage",
      description: "A spirited archaeologist equipped with a massive drill.",
      image: "img/heroes/venture.png",
    },
    {
      name: "Widowmaker",
      role: "damage",
      description:
        "The perfect assassin: a patient, ruthlessly efficient killer who shows neither emotion nor remorse.",
      image: "img/heroes/widowmaker.png",
      release_date: "2016-05-24",
      base_of_operations: "Annecy, France",
      affiliation: "Talon",
    },
  ],

  support: [
    {
      name: "Ana",
      role: "support",
      description:
        "One of the founding members of Overwatch, Ana uses her skills and expertise to defend her home and the people she cares for.",
      image: "img/heroes/ana.png",
      base_of_operations: "Cairo, Egypt",
      release_date: "July 19, 2016",
      birthday: "January 1",
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
          name: "Biotic Rifle",
          description:
            "Ana's rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle's scope to zoom in on targets and make highly accurate shots.",
          icon: "../img/heroes/icons/anagun.png",
          video: "../videos/ana/biotic-rifle.mp4",
          stats: {
            "Healing per shot": "75 health over 0.59 seconds",
            "Damage per shot": "75 damage over 0.59 seconds",
            "Rate of fire": "1.25 shots per second",
            Ammo: "15",
            "Reload time": "1.5 seconds animation",
            "Unscoped accuracy": "Projectile",
            "Scoped accuracy": "100% accurate hitscan",
            "Movement speed penalty": "-65% (scoped)",
          },
          notes: `<ul>
            <li>Ammo and Reloading:
              <ul>
                <li>15 rounds per magazine</li>
                <li>1.5 second reload animation</li>
              </ul>
            </li>
            <li>Firing Modes:
              <ul>
                <li><strong>Unscoped:</strong> Projectile with travel time</li>
                <li><strong>Scoped:</strong> Hitscan with 100% accuracy</li>
              </ul>
            </li>
            <li>Healing Properties:
              <ul>
                <li>75 healing over 0.59 seconds per shot</li>
                <li>Shots pass through full-health allies</li>
                <li>No damage falloff at range</li>
              </ul>
            </li>
            <li>Damage Properties:
              <ul>
                <li>75 damage over 0.59 seconds per shot</li>
                <li>Cannot headshot (without the Major perk:<a href='#major-perk-headhunter'> Headhunter</a>)</li>
              </ul>
            </li>
            <li>Interaction Notes:
              <ul>
                <li>Can be deflected by <a href='genji.html#deflect'>Genji's Deflect</a></li>
                <li>-65% movement speed while scoped</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Sleep Dart",
          description:
            "Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).",
          icon: "../img/heroes/icons/ana-ability-1.png",
          video: "../videos/ana/sleep-dart.mp4",
          stats: {
            Effect: "Puts target to sleep for 3.5 seconds",
            "Cast time": "0.240s startup + 0.752 seconds recovery",
            "Projectile speed": "60 meters per second",
            Cooldown: "14 seconds",
            Duration:
              "<br>1.5 - 5 seconds (non-tank)<br>1.5 - 3 seconds (tank)",
          },
          notes:
            `<ul>
            <li>Effect Details:
              <ul>
                <li>Puts target to sleep for 3.5 seconds</li>
                <li>Deals 5 damage on hit</li>
                <li>Target wakes up upon taking damage</li>
              </ul>
            </li>
            <li>Mechanics:
              <ul>
                <li>0.24s cast time + 0.752s recovery</li>
                <li>60m/s projectile speed</li>
                <li>14 second cooldown</li>
              </ul>
            </li>
            <li>Interaction Notes:
              <ul>
                <li>Can be nullified by <a href='kiriko.html#protective-suzu'>Kiriko's Protective Suzu</a></li>
                <li>Can be deflected by <a href='genji.html#deflect'>Genji's Deflect</a></li>
                <li>Duration reduced against tank heroes (1.5-3s)</li>
              </ul>
            </li>
            <li>Synergy:
              <ul>
                <li>Enhanced by <a href='#minor-perk-groggy'>Minor perk: Groggy </a> (slows and damages on wake)</li>
                <li>Great for canceling enemy ultimates or isolating key targets</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Biotic Grenade",
          description:
            "Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments.",
          icon: "../img/heroes/icons/ana-ability-2.png",
          video: "../videos/ana/biotic-grenade.mp4",
          stats: {
            Healing: "75",
            Damage: "75",
            "Healing modification": "<br>+50% to allies<br>-100% to enemies",
            "Heal block duration": "<br>3 seconds",
            Cooldown: "14 seconds",
            "Area of effect": "4 meter radius",
          },
          notes: `<ul>
            <li>Primary Effects:
              <ul>
                <li>Heals allies for 75 health</li>
                <li>Deals 75 damage to enemies</li>
                <li>4 meter radius area of effect</li>
              </ul>
            </li>
            <li>Healing Modifiers:
              <ul>
                <li>+50% healing received for allies hit</li>
                <li>-100% healing received for enemies hit</li>
                <li>Heal block lasts for 3 seconds</li>
              </ul>
            </li>
            <li>Cooldown & Usage:
              <ul>
                <li>14 second cooldown</li>
                <li>Can be used offensively or defensively</li>
                <li>Great for countering enemy healing</li>
              </ul>
            </li>
            <li>Interaction Notes:
              <ul>
                <li>Can be enhanced by the Minor perk:<a href='#minor-perk-biotic-bounce'> Biotic Bounce</a></li>
                <li>Can be nullified by <a href='kiriko.html#protective-suzu'>Kiriko's Protective Suzu</a></li>
                <li>Can be deflected by <a href='genji.html#deflect'>Genji's Deflect</a></li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Nano Boost",
          description:
            "Ana injects an ally with a combat boost. They deal more damage, and take less damage from enemies attacks.",
          icon: "../img/heroes/icons/ana-ultimate.png",
          video: "../videos/ana/nano-boost.mp4",
          stats: {
            Healing: "250",
            "Damage boost": "+50%",
            "Damage reduction": "-50%",
            Duration: "8 seconds",
            "Ultimate cost": "2300 points",
            "Cast time": "0.128 seconds + 0.6 seconds recovery",
            "Casting range": "40 meters",
          },
          notes:
            `<ul>
            <li>Effect Details:
              <ul>
                <li>Heals target for 250 health</li>
                <li>+50% damage boost</li>
                <li>-50% damage taken</li>
                <li>Lasts 8 seconds</li>
              </ul>
            </li>
            <li>Mechanics:
              <ul>
                <li>40 meter casting range</li>
                <li>0.128s cast time + 0.6s recovery</li>
                <li>Costs 2300 ultimate points</li>
              </ul>
            </li>
            <li>Usage Tips:
              <ul>
                <li>Great for enabling aggressive plays by damage dealers</li>
                <li>Can be used defensively to save critical allies</li>
                <li>Effect ends immediately if target dies</li>
              </ul>
            </li>
            <li>Interaction Notes:
              <ul>
                <li>Non-hitscan projectile that cannot be blocked</li>
                <li>Wasted if target dies before impact</li>
                <li>Enhanced by the Major perk: <a href='#major-perk-shrike'>Shrike</a> (also hits Ana with Nano Boost)</li>
                <li>Self-cast only in Free-for-All Deathmatch</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Minor perk: Groggy",
          description:
            "Enemies waking up from Sleep Dart are slowed and take 50 damage for 2 seconds.",
          icon: "../img/heroes/icons/ana-minor-perk-1.webp",
          video: "../videos/ana/ana-minor-perk-1.mp4",
          stats: {
            "Slow effect": "50% movement speed reduction",
            Damage: "50",
            Duration: "2 seconds",
            Cooldown: "14 seconds",
          },
          notes:
            `<ul>
            <li>Effect Details:
              <ul>
                <li>50% movement speed slow for 2 seconds</li>
                <li>50 damage over time</li>
                <li>Triggers when sleep effect ends</li>
              </ul>
            </li>
            <li>Usage Tips:
              <ul>
                <li>Makes it easier to land follow-up shots</li>
                <li>Great for confirming kills on slept targets</li>
                <li>Works well with team coordination</li>
              </ul>
            </li>
            <li>Synergy:
              <ul>
                <li>Combines well with primary fire for quick eliminations</li>
                <li>Effective against mobile heroes</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Minor perk: Biotic Bounce",
          description:
            "After exploding, Biotic Grenade bounces and explodes again for 25 damage and healing.",
          icon: "../img/heroes/icons/ana-minor-perk-2.webp",
          video: "../videos/ana/ana-minor-perk-2.mp4",
          stats: {
            Healing: "25",
            Damage: "25",
          },
          notes:
            `<ul>
            <li>Effect Details:
              <ul>
                <li>Secondary explosion after initial detonation</li>
                <li>25 healing to allies in 4m radius</li>
                <li>25 damage to enemies in 4m radius</li>
              </ul>
            </li>
            <li>Secondary Explosion Properties:
              <ul>
                <li>Same effects as primary explosion</li>
                <li>+50% healing boost to allies</li>
                <li>-100% healing to enemies</li>
                <li>3 second duration on all effects</li>
              </ul>
            </li>
            <li>Usage Tips:
              <ul>
                <li>Great for hitting enemies around corners</li>
                <li>Can heal/damage in a wider area</li>
                <li>Useful for hitting clustered targets</li>
              </ul>
            </li>
            <li>Synergy:
              <ul>
                <li>Works well with grouped teammates</li>
                <li>Effective against bunker compositions</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Major perk: Headhunter",
          description:
            "Biotic Rifle can now land critical hits on enemies heads for 1.5x damage.",
          icon: "../img/heroes/icons/ana-major-perk-1.webp",
          video: "../videos/ana/ana-major-perk-1.mp4",
          stats: {
            "Critical damage": "1.5x base damage (75 → 112.5)",
            Effect: "Applies to scoped and unscoped shots"
          },
          notes:
           `<ul>
            <li>Effect Details:
              <ul>
                <li>Biotic Rifle can now score headshots</li>
                <li>1.5x damage multiplier on headshots (75 → 112.5)</li>
                <li>Works in both scoped and unscoped modes</li>
              </ul>
            </li>
            <li>Impact on DPS:
              <ul>
                <li>Significantly increases Ana's dueling potential</li>
                <li>Two-shot potential on 200HP heroes (112.5 + 75 = 187.5)</li>
                <li>Three-shot potential on 250HP heroes</li>
              </ul>
            </li>
            <li>Usage Tips:
              <ul>
                <li>Aim for the head when dueling enemies</li>
                <li>Combine with sleep dart for easy headshots</li>
                <li>Great for pressuring enemy DPS and supports</li>
              </ul>
            </li>
            <li>Synergy:
              <ul>
                <li>Works well with scoped shots for precision</li>
                <li>Combines with Biotic Grenade for burst damage</li>
              </ul>
            </li>
          </ul>`,
        },
        {
          name: "Major perk: Shrike",
          description: "Using Nano Boost also casts it on Ana.",
          icon: "../img/heroes/icons/ana-major-perk-2.webp",
          video: "../videos/ana/ana-major-perk-2.mp4",
          stats: {
            "Self-heal": "250 health",
            Duration: "6 seconds",
            Effect: "Grants same benefits as Nano Boost target"
          },
          notes:
           `<ul>
            <li>Effect Details:
              <ul>
                <li>Self-heals for 250 health</li>
                <li>Grants +50% damage boost</li>
                <li>Provides -50% damage taken</li>
                <li>Lasts for 6 seconds</li>
              </ul>
            </li>
            <li>Strategic Value:
              <ul>
                <li>Effectively doubles Nano Boost's value</li>
                <li>Allows Ana to be more aggressive</li>
                <li>Great for clutch situations</li>
              </ul>
            </li>
            <li>Usage Tips:
              <ul>
                <li>Use when both you and an ally need healing</li>
                <li>Great for countering dive attempts</li>
                <li>Can be used to survive enemy ultimates</li>
              </ul>
            </li>
            <li>Synergy:
              <ul>
                <li>Works well when playing aggressively</li>
                <li>Combines with Biotic Grenade for burst healing</li>
                <li>Great for 1v1 duels when needed</li>
              </ul>
            </li>
          </ul>`,
        },
      ],
    },
    {
      name: "Baptiste",
      role: "support",
      description:
        "A combat medic who uses his skills to help those in need, while grappling with his past as a Talon operative.",
      image: "img/heroes/baptiste.png",
    },
    {
      name: "Brigitte",
      role: "support",
      description:
        "An adventurer and squire to Reinhardt Wilhelm, who is determined to fight for the greater good.",
      image: "img/heroes/brigitte.png",
    },
    {
      name: "Illari",
      role: "support",
      description:
        "The last child of the sun, a warrior with the power of a solar goddess.",
      image: "img/heroes/illari.png",
    },
    {
      name: "Juno",
      role: "support",
      description: "A versatile support with powerful healing capabilities.",
      image: "img/heroes/juno.png",
      release_date: "TBA",
      base_of_operations: "TBA",
      affiliation: "TBA",
    },
    {
      name: "Kiriko",
      role: "support",
      description: "A skilled ninja healer and protector of her hometown.",
      image: "img/heroes/kiriko.png",
    },
    {
      name: "Lifeweaver",
      role: "support",
      description:
        "A brilliant scientist from Thailand who combines nature with technology to heal the world.",
      image: "img/heroes/lifeweaver.png",
    },
    {
      name: "Lucio",
      role: "support",
      description:
        "An international celebrity who inspires social change through his music and actions.",
      image: "img/heroes/lucio.png",
    },
    {
      name: "Mercy",
      role: "support",
      description:
        "A guardian angel to those who come under her care, Dr. Angela Ziegler is a peerless healer, a brilliant scientist, and a staunch advocate for peace.",
      image: "img/heroes/mercy.png",
    },
    {
      name: "Moira",
      role: "support",
      description:
        "A brilliant geneticist who is pushing the boundaries of science, even if it means crossing ethical lines.",
      image: "img/heroes/moira.png",
    },
    {
      name: "Zenyatta",
      role: "support",
      description:
        "An omnic monk who wanders the world in search of spiritual enlightenment.",
      image: "img/heroes/zenyatta.png",
      release_date: "2016-05-24",
      base_of_operations: "Shambali Monastery, Nepal",
      affiliation: "Shambali",
    },
  ],

  // Get all heroes as a single array
  all: function () {
    return [...this.tank, ...this.damage, ...this.support];
  },

  // Get a random perk for a given hero and type
  getRandomPerk: function (heroName, type = "minor") {
    const hero = this.all().find((h) => h.name === heroName);
    if (!hero) return "No hero found.";

    const perks = this.perks[hero.role]?.[type]?.[heroName];
    if (!perks || perks.length === 0) {
      return `No ${type} perk available for this hero.`;
    }
    return perks[Math.floor(Math.random() * perks.length)];
  },

  // Get random hero with perks
  getRandom: function (role = "all") {
    const heroes = role === "all" ? this.all() : this[role.toLowerCase()];
    if (!heroes || heroes.length === 0)
      return {
        error:
          "Invalid role or no heroes in role. Please use: tank, damage, support, or all",
      };

    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];

    return {
      ...randomHero,
      minorPerk: this.getRandomPerk(randomHero.name, "minor"),
      majorPerk: this.getRandomPerk(randomHero.name, "major"),
    };
  },
};

// Example usage:
// console.log(overwatchHeroes.getRandom('tank'));  // Random tank
// console.log(overwatchHeroes.getRandom('damage')); // Random damage
// console.log(overwatchHeroes.getRandom('support')); // Random support
// console.log(overwatchHeroes.getRandom());         // Random hero from any role
// console.log(overwatchHeroes.all());               // Get all heroes as an array

export { overwatchHeroes };
