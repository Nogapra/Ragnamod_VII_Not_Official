// priority: 1

onEvent('recipes', e => {

    function r(craft) { e.remove({ id: craft }) }

    var removeId = [
        /occultism:miner/,
        /thermal:earth_charge/,
        /ironfurnaces:upgrades/,
        'industrialforegoing:laser_drill_ore/raw_materials/iridium',
        'industrialforegoing:laser_drill_ore/raw_materials/nickel',
        'industrialforegoing:laser_drill_ore/raw_materials/aluminum',
        'industrialforegoing:laser_drill_ore/raw_materials/uranium',
        'industrialforegoing:laser_drill_ore/raw_materials/osmium',
        'industrialforegoing:laser_drill_ore/raw_materials/lead',
        'industrialforegoing:laser_drill_ore/raw_materials/tin',
        'industrialforegoing:laser_drill_ore/raw_materials/silver',
        'industrialforegoing:laser_drill_ore/raw_materials/gold',
        'industrialforegoing:laser_drill_ore/raw_materials/copper',
        'industrialforegoing:laser_drill_ore/raw_materials/iron',
        'industrialforegoing:laser_drill_ore/ores/sulfur',
        'industrialforegoing:laser_drill_ore/ores/ruby',
        'industrialforegoing:laser_drill_ore/ores/sapphire',
        'industrialforegoing:laser_drill_ore/ores/fluorite',
        'industrialforegoing:laser_drill_ore/ores/niter',
        'industrialforegoing:laser_drill_ore/lapis',
        'industrialforegoing:laser_drill_ore/redstone',
        'industrialforegoing:laser_drill_ore/certus_quartz',
        'industrialforegoing:laser_drill_ore/coal',
        'industrialforegoing:laser_drill_ore/diamond',
        'industrialforegoing:laser_drill_ore/quartz',
        'industrialforegoing:laser_drill_ore/glowstone',
        'industrialforegoing:laser_drill_ore/emerald',
        'create:splashing/immersiveengineering/crushed_uranium_ore',
        'create:splashing/immersiveengineering/crushed_nickel_ore',
        'create:splashing/immersiveengineering/crushed_lead_ore',
        'create:splashing/immersiveengineering/crushed_silver_ore',
        'create:splashing/immersiveengineering/crushed_uranium_ore',
        'create:splashing/mekanism/crushed_lead_ore',
        'create:splashing/mekanism/crushed_tin_ore',
        'bloodmagic:arc/ore/dustiron',
        'bloodmagic:arc/ore/dustgold',
        'immersiveengineering:mineral/auricupride',
        'immersiveengineering:mineral/beryl',
        'immersiveengineering:mineral/bituminous_coal',
        'immersiveengineering:mineral/cassiterite',
        'immersiveengineering:mineral/chalcopyrite',
        'immersiveengineering:mineral/cinnabar',
        'immersiveengineering:mineral/cooled_lava_tube',
        'immersiveengineering:mineral/cooperite',
        'immersiveengineering:mineral/galena',
        'immersiveengineering:mineral/igneous_rock',
        'immersiveengineering:mineral/laterite',
        'immersiveengineering:mineral/mephitic_quarzite',
        'immersiveengineering:mineral/nether_silt',
        'immersiveengineering:mineral/pentlandite',
        'immersiveengineering:mineral/silt',
        'immersiveengineering:mineral/wolframite',
        'createaddition:compat/immersiveengineering/sphalerite',
        'beyond_earth:steel_ingot_blasting',
        'undergarden:blast_catalyst',
        'undergarden:smelt_catalyst',
        'darkerdepths:raw_silver',
        'immersiveengineering:crafting/raw_block_silver_to_raw_silver',
        'immersiveengineering:crafting/raw_silver_to_raw_block_silver',
        'immersiveengineering:crafting/raw_block_nickel_to_raw_nickel',
        'immersiveengineering:crafting/raw_nickel_to_raw_block_nickel',
        'immersiveengineering:crafting/raw_block_uranium_to_raw_uranium',
        'immersiveengineering:crafting/raw_uranium_to_raw_block_uranium',
        'immersiveengineering:crafting/raw_block_aluminum_to_raw_aluminum',
        'immersiveengineering:crafting/raw_aluminum_to_raw_block_aluminum',
        'immersiveengineering:crafting/raw_block_lead_to_raw_lead',
        'immersiveengineering:crafting/raw_lead_to_raw_block_lead',
        'mekanism:processing/lead/storage_blocks/from_ingots',
        'mekanism:processing/lead/raw/from_raw_block',
        'mekanism:processing/lead/raw_storage_blocks/from_raw',
        'mekanism:processing/tin/raw/from_raw_block',
        'mekanism:processing/tin/raw_storage_blocks/from_raw',
        'create:splashing/immersiveengineering/crushed_raw_silver',
        'create:splashing/immersiveengineering/crushed_raw_uranium',
        'create:splashing/immersiveengineering/crushed_raw_lead',
        'create:splashing/immersiveengineering/crushed_raw_nickel',
        'create:splashing/immersiveengineering/crushed_raw_aluminum',
        'create:splashing/mekanism/crushed_raw_lead',
        'create:splashing/mekanism/crushed_raw_tin',
        'immersiveengineering:crafting/ingot_constantan_to_storage_constantan',
        'immersiveengineering:crafting/ingot_electrum_to_storage_electrum',
        'immersiveengineering:crafting/ingot_nickel_to_storage_nickel',
        'immersiveengineering:crafting/ingot_aluminum_to_storage_aluminum',
        'immersiveengineering:crafting/ingot_steel_to_storage_steel',
        'immersiveengineering:crafting/ingot_uranium_to_storage_uranium',
        'immersiveengineering:crafting/ingot_silver_to_storage_silver',
        'chemlib:nickel_ingot_to_block',
        'chemlib:aluminum_ingot_to_block',
        'chemlib:tin_ingot_to_block',
        'chemlib:uranium_ingot_to_block',
        'chemlib:silver_ingot_to_block',
        'darkerdepths:silver_block',
        'occultism:crafting/silver_block',
        'ftbic:shaped/lead_ingot_to_lead_block',
        'ftbic:shaped/enderium_ingot_to_enderium_block',
        'ftbic:shaped/aluminum_ingot_to_aluminum_block',
        'ftbic:shaped/bronze_ingot_to_bronze_block',
        'ftbic:shaped/tin_ingot_to_tin_block',
        'ftbic:shaped/uranium_ingot_to_uranium_block',
        'mekanism:storage_blocks/bronze',
        'mekanism:storage_blocks/charcoal',
        'mekanism:storage_blocks/steel',
        'mekanism:processing/tin/storage_blocks/from_ingots',
        'quark:building/crafting/compressed/charcoal_block',
        'immersiveengineering:crafting/plate_silver_hammering',
        'immersiveengineering:crafting/plate_aluminum_hammering',
        'immersiveengineering:crafting/plate_electrum_hammering',
        'immersiveengineering:crafting/plate_iron_hammering',
        'immersiveengineering:crafting/plate_gold_hammering',
        'immersiveengineering:crafting/plate_steel_hammering',
        'immersiveengineering:crafting/plate_uranium_hammering',
        'immersiveengineering:crafting/plate_copper_hammering',
        'immersiveengineering:crafting/plate_nickel_hammering',
        'immersiveengineering:crafting/plate_lead_hammering',
        'immersiveengineering:crafting/plate_constantan_hammering',
        'immersiveengineering:crafting/hammercrushing_cobalt',
        'immersiveengineering:crafting/hammercrushing_osmium',
        'immersiveengineering:crafting/hammercrushing_silver',
        'immersiveengineering:crafting/hammercrushing_uranium',
        'immersiveengineering:crafting/hammercrushing_aluminum',
        'immersiveengineering:crafting/hammercrushing_iron',
        'immersiveengineering:crafting/hammercrushing_gold',
        'immersiveengineering:crafting/hammercrushing_copper',
        'immersiveengineering:crafting/hammercrushing_zinc',
        'immersiveengineering:crafting/hammercrushing_nickel',
        'immersiveengineering:crafting/hammercrushing_lead',
        'immersiveengineering:crafting/hammercrushing_tin',
        'immersiveengineering:crafting/raw_hammercrushing_copper',
        'immersiveengineering:crafting/raw_hammercrushing_osmium',
        'immersiveengineering:crafting/raw_hammercrushing_zinc',
        'immersiveengineering:crafting/raw_hammercrushing_silver',
        'immersiveengineering:crafting/raw_hammercrushing_nickel',
        'immersiveengineering:crafting/raw_hammercrushing_gold',
        'immersiveengineering:crafting/raw_hammercrushing_iron',
        'immersiveengineering:crafting/raw_hammercrushing_tin',
        'immersiveengineering:crafting/raw_hammercrushing_lead',
        'immersiveengineering:crafting/raw_hammercrushing_uranium',
        'immersiveengineering:crafting/raw_hammercrushing_aluminum',
        'immersiveengineering:crafting/raw_hammercrushing_cobalt',
        'ftbic:shaped/bronze_dust',
        'ftbic:shaped/enderium_dust',
        'ftbic:shaped/enderium_dust_2',
        'thermal:enderium_dust_2',
        'thermal:electrum_dust_2',
        'thermal:constantan_dust_2',
        'thermal:invar_dust_3',
        'thermal:bronze_dust_4',
        'thermal:lumium_dust_4',
        'thermal:signalum_dust_4',
        'immersiveengineering:crafting/electrum_mix',
        'immersiveengineering:crafting/constantan_mix',
        'mekanism:nuggets/steel',
        'mekanism:nuggets/bronze',
        'mekanism:processing/lead/nugget/from_ingot',
        'mekanism:processing/tin/nugget/from_ingot',
        'immersiveengineering:crafting/ingot_lead_to_storage_lead',
        'immersiveengineering:crafting/ingot_lead_to_nugget_lead',
        'immersiveengineering:crafting/ingot_steel_to_nugget_steel',
        'immersiveengineering:crafting/ingot_nickel_to_nugget_nickel',
        'immersiveengineering:crafting/ingot_silver_to_nugget_silver',
        'immersiveengineering:crafting/ingot_electrum_to_nugget_electrum',
        'immersiveengineering:crafting/ingot_aluminum_to_nugget_aluminum',
        'immersiveengineering:crafting/ingot_uranium_to_nugget_uranium',
        'immersiveengineering:crafting/ingot_constantan_to_nugget_constantan',
        'immersiveengineering:crafting/copper_ingot_to_nugget_copper',
        'chemlib:tin_ingot_to_nugget',
        'chemlib:zinc_ingot_to_nugget',
        'chemlib:silver_ingot_to_nugget',
        'chemlib:osmium_ingot_to_nugget',
        'chemlib:nickel_ingot_to_nugget',
        'chemlib:iridium_ingot_to_nugget',
        'chemlib:aluminum_ingot_to_nugget',
        'chemlib:uranium_ingot_to_nugget',
        'chemlib:lead_ingot_to_nugget',
        'ftbic:shapeless/tin_ingot_to_tin_nugget',
        'ftbic:shapeless/lead_ingot_to_lead_nugget',
        'ftbic:shapeless/enderium_ingot_to_enderium_nugget',
        'ftbic:shapeless/copper_ingot_to_copper_nugget',
        'ftbic:shapeless/aluminum_ingot_to_aluminum_nugget',
        'ftbic:shapeless/uranium_ingot_to_uranium_nugget',
        'ftbic:shapeless/bronze_ingot_to_bronze_nugget',
        'tconstruct:common/materials/netherite_nugget_from_ingot',
        'tconstruct:common/materials/copper_nugget_from_ingot',
        'create:crafting/materials/copper_nugget',
        'occultism:crafting/silver_nugget',
        'immersiveengineering:crafting/nugget_copper_to_copper_ingot',
        'immersiveengineering:crafting/nugget_uranium_to_ingot_uranium',
        'ftbic:shaped/bronze_ingot',
        'ftbic:shaped/enderium_ingot',
        'ftbic:shaped/nuggets/enderium_to_enderium_ingot',
        'ftbic:shaped/nuggets/copper_to_copper_ingot',
        'ftbic:shaped/nuggets/aluminum_to_aluminum_ingot',
        'ftbic:shaped/nuggets/uranium_to_uranium_ingot',
        'ftbic:shaped/nuggets/lead_to_lead_ingot',
        'ftbic:shaped/nuggets/bronze_to_bronze_ingot',
        'ftbic:shaped/nuggets/tin_to_tin_ingot',
        'ftbic:shapeless/enderium_block_to_enderium_ingot',
        'ftbic:shapeless/tin_block_to_tin_ingot',
        'ftbic:shapeless/bronze_block_to_bronze_ingot',
        'ftbic:shapeless/aluminum_block_to_aluminum_ingot',
        'ftbic:shapeless/uranium_block_to_uranium_ingot',
        'ftbic:shapeless/lead_block_to_lead_ingot',
        'create:crafting/materials/copper_ingot',
        'tconstruct:common/materials/copper_ingot_from_nuggets',
        'tconstruct:common/materials/netherite_ingot_from_nuggets',
        'darkerdepths:silver_ingot',
        'chemlib:iridium_block_to_ingot',
        'chemlib:nickel_block_to_ingot',
        'chemlib:nickel_nugget_to_ingot',
        'chemlib:osmium_block_to_ingot',
        'chemlib:osmium_nugget_to_ingot',
        'chemlib:silver_block_to_ingot',
        'chemlib:silver_nugget_to_ingot',
        'chemlib:uranium_nugget_to_ingot',
        'chemlib:iridium_nugget_to_ingot',
        'chemlib:aluminum_nugget_to_ingot',
        'chemlib:lead_nugget_to_ingot',
        'chemlib:aluminum_block_to_ingot',
        'chemlib:uranium_block_to_ingot',
        'chemlib:lead_block_to_ingot',
        'chemlib:tin_block_to_ingot',
        'chemlib:tin_nugget_to_ingot',
        'chemlib:zinc_block_to_ingot',
        'chemlib:zinc_nugget_to_ingot',
        'chemlib:idirium_block_to_ingot',
        'mekanism:processing/steel/ingot/from_block',
        'mekanism:processing/steel/ingot/from_nuggets',
        'mekanism:processing/lead/ingot/from_block',
        'mekanism:processing/lead/ingot/from_nuggets',
        'mekanism:processing/bronze/ingot/from_block',
        'mekanism:processing/bronze/ingot/from_nuggets',
        'mekanism:processing/tin/ingot/from_block',
        'mekanism:processing/tin/ingot/from_nuggets',
        'immersiveengineering:crafting/storage_steel_to_ingot_steel',
        'immersiveengineering:crafting/nugget_steel_to_ingot_steel',
        'immersiveengineering:crafting/storage_lead_to_ingot_lead',
        'immersiveengineering:crafting/nugget_lead_to_ingot_lead',
        'immersiveengineering:crafting/nugget_nickel_to_ingot_nickel',
        'immersiveengineering:crafting/storage_nickel_to_ingot_nickel',
        'immersiveengineering:crafting/storage_uranium_to_ingot_uranium',
        'immersiveengineering:crafting/storage_silver_to_ingot_silver',
        'immersiveengineering:crafting/nugget_silver_to_ingot_silver',
        'immersiveengineering:crafting/storage_electrum_to_ingot_electrum',
        'immersiveengineering:crafting/nugget_electrum_to_ingot_electrum',
        'immersiveengineering:crafting/storage_aluminum_to_ingot_aluminum',
        'immersiveengineering:crafting/nugget_aluminum_to_ingot_aluminum',
        'immersiveengineering:crafting/storage_constantan_to_ingot_constantan',
        'immersiveengineering:crafting/nugget_constantan_to_ingot_constantan',
        'occultism:crafting/silver_ingot_from_block',
        'occultism:crafting/silver_ingot_from_nuggets',
        'thermal:fire_charge/bronze_ingot_4',
        'thermal:fire_charge/electrum_ingot_2',
        'thermal:fire_charge/invar_ingot_3',
        'thermal:fire_charge/constantan_ingot_2',
        'thermal:fire_charge/signalum_ingot_4',
        'thermal:fire_charge/lumium_ingot_4',
        'thermal:fire_charge/enderium_ingot_2',
        'industrialforegoing:machine_frame_pity',
        'thermal:machine_frame',
        'mekanism:steel_casing',
        'avaritia:iron_singularity',
        'avaritia:lapis_singularity',
        'avaritia:copper_singularity',
        'avaritia:redstone_singularity',
        'avaritia:gold_singularity',
        'avaritia:diamond_singularity',
        'avaritia:nickel_singularity',
        'avaritia:lead_singularity',
        'avaritia:quartz_singularity',
        'avaritia:tin_singularity',
        'avaritia:silver_singularity',
        'avaritia:emerald_singularity',
        'avaritia:iridium_singularity',
        'avaritia:platinum_singularity',
        'immersiveengineering:crafting/coke_to_coal_coke',
        'immersiveengineering:crafting/coal_coke_to_coke',
        'hostilenetworks:living_matter/extraterrestrial/nether_star',
        'avaritia:cosmic_meatballs',
        'beyond_earth:iron_plate',
        'beyond_earth:desh_plate',
        'ftbic:shaped/ingots/tin_to_tin_rod',
        'ftbic:shaped/ingots/lead_to_lead_rod',
        'ftbic:shaped/ingots/iridium_to_iridium_rod',
        'ftbic:shaped/ingots/uranium_to_uranium_rod',
        'ftbic:shaped/ingots/copper_to_copper_rod',
        'ftbic:shaped/ingots/iron_to_iron_rod',
        'ftbic:shaped/ingots/gold_to_gold_rod',
        'ftbic:shaped/ingots/enderium_to_enderium_rod',
        'ftbic:shaped/ingots/bronze_to_bronze_rod',
        'ftbic:shaped/ingots/aluminum_to_aluminum_rod',
        'immersiveposts:has_copper_rod',
        'immersiveposts:has_gold_rod',
        'immersiveposts:has_lead_rod',
        'immersiveposts:has_uranium_rod',
        'immersiveposts:has_silver_rod',
        'immersiveposts:has_nickel_rod',
        'immersiveposts:has_constantan_rod',
        'immersiveposts:has_electrum_rod',
        'immersiveengineering:crafting/stick_iron',
        'immersiveengineering:crafting/stick_aluminum',
        'immersiveengineering:crafting/stick_steel',
        'beyond_earth:iron_stick',
        'immersiveengineering:crafting/wire_electrum',
        'immersiveengineering:crafting/wire_aluminum',
        'immersiveengineering:crafting/wire_steel',
        'immersiveengineering:crafting/wire_lead',
        'immersiveengineering:crafting/wire_copper',
        'ftbic:shaped/gold_wire',
        'ftbic:shaped/enderium_wire',
        'ftbic:shaped/copper_wire',
        'ftbic:shaped/aluminum_wire',
        'minecraft:glass_bottle',
        'ftbic:shaped/ingots/aluminum_to_aluminum_gear',
        'ftbic:shaped/ingots/bronze_to_bronze_gear',
        'ftbic:shaped/ingots/copper_to_copper_gear',
        'ftbic:shaped/ingots/enderium_to_enderium_gear',
        'ftbic:shaped/ingots/iridium_to_iridium_gear',
        'ftbic:shaped/ingots/uranium_to_uranium_gear',
        'ftbic:shaped/ingots/lead_to_lead_gear',
        'ftbic:shaped/ingots/tin_to_tin_gear',
        'ftbic:shaped/ingots/iron_to_iron_gear',
        'ftbic:shaped/ingots/gold_to_gold_gear',
        'industrialforegoing:diamond_gear',
        'industrialforegoing:iron_gear',
        'industrialforegoing:gold_gear',
        'thermal:parts/gold_gear',
        'thermal:parts/iron_gear',
        'thermal:parts/diamond_gear',
        'thermal:parts/tin_gear',
        'thermal:parts/lead_gear',
        'thermal:parts/bronze_gear',
        'thermal:parts/copper_gear',
        'thermal:parts/enderium_gear',
        'thermal:parts/signalum_gear',
        'thermal:parts/constantan_gear',
        'thermal:parts/invar_gear',
        'thermal:parts/electrum_gear',
        'thermal:parts/nickel_gear',
        'thermal:parts/silver_gear',
        'thermal:parts/emerald_gear',
        'thermal:parts/quartz_gear',
        'thermal:parts/lapis_gear',
        'thermal:parts/netherite_gear',
        'thermal:parts/lumium_gear',
        'pneumaticcraft:compressed_iron_gear',
        'thermal_extra:parts/dragonsteel_gear',
        'thermal_extra:parts/shellite_gear',
        'thermal_extra:parts/twinite_gear',
        'thermal_extra:parts/soul_infused_gear',
        'redstone_arsenal:materials/flux_gear',
        'forbidden_arcanus:enchanted_golden_apple',
        'bhc:god_apple',
        'architects_palette:bone_meal',
        'minecraft:cake',
        'farmersdelight:cake_from_milk_bottle',
        'blue_skies:cake_compat',
        'create:crafting/curiosities/cake',
        'createaddition:mixing/electrum',
        'createaddition:crafting/electrum_ingot',
        'createaddition:rolling/electrum_ingot',
        'createaddition:rolling/electrum_plate',
        'ars_nouveau:archwood_to_chest',
        'ironfurnaces:furnaces/iron_furnace',
        'ironfurnaces:furnaces/gold_furnace',
        'ironfurnaces:furnaces/silver_furnace2',
        'spirit:villager',
        'minecraft:beacon',
        'alchemistry:copper_ingot_from_smelting_copper_dust',
        'alchemistry:gold_ingot_from_smelting_gold_dust',
        'alchemistry:iron_ingot_from_smelting_iron_dust',
        'beyond_earth:gold_ingot',
        'beyond_earth:iron_ingot',
        'beyond_earth:iron_ingot_2',
        'beyond_earth:iron_ingot_3',
        'beyond_earth:smelting/copper_ingot_from_glacio_ore',
        'beyond_earth:smelting/iron_ingot_from_glacio_ore',
        'bloodmagic:smelting/ingot_copper',
        'bloodmagic:smelting/ingot_gold',
        'bloodmagic:smelting/ingot_iron',
        'byg:gold_ingot_from_smelting_blue_nether_gold_ore',
        'byg:gold_ingot_from_smelting_brimstone_nether_gold_ore',
        'chemlib:lead_ingot_from_smelting_lead_dust',
        'chemlib:nickel_ingot_from_smelting_nickel_dust',
        'chemlib:osmium_ingot_from_smelting_osmium_dust',
        'chemlib:tin_ingot_from_smelting_tin_dust',
        'chemlib:uranium_ingot_from_smelting_uranium_dust',
        'chemlib:aluminum_ingot_from_smelting_aluminum_dust',
        'chemlib:silver_ingot_from_smelting_silver_dust',
        'create:smelting/ingot_lead_compat_immersiveengineering',
        'create:smelting/ingot_lead_compat_mekanism',
        'create:smelting/ingot_nickel_compat_immersiveengineering',
        'create:smelting/ingot_tin_compat_mekanism',
        'create:smelting/ingot_uranium_compat_immersiveengineering',
        'create:smelting/ingot_silver_compat_immersiveengineering',
        'darkerdepths:gold_ingot_from_smelting_aridrock_gold_ore',
        'darkerdepths:gold_ingot_from_smelting_limestone_gold_ore',
        'darkerdepths:iron_ingot_from_smelting_aridrock_iron_ore',
        'darkerdepths:iron_ingot_from_smelting_limestone_iron_ore',
        'darkerdepths:silver_ingot_from_smelting_aridrock_silver_ore',
        'darkerdepths:silver_ingot_from_smelting_limestone_silver_ore',
        'ftbic:smelting/dusts/bronze_to_ingot',
        'ftbic:smelting/dusts/copper_to_copper_ingot',
        'ftbic:smelting/dusts/enderium_to_ingot',
        'ftbic:smelting/dusts/gold_to_gold_ingot',
        'ftbic:smelting/dusts/iron_to_iron_ingot',
        'ftbic:smelting/dusts/lead_to_ingot',
        'ftbic:smelting/dusts/tin_to_ingot',
        'ftbic:smelting/dusts/uranium_to_ingot',
        'ftbic:smelting/dusts/aluminum_to_ingot',
        'ftbic:smelting/dusts/iridium_to_ingot',
        'ftbic:smelting/ores/lead_to_ingot',
        'ftbic:smelting/ores/tin_to_ingot',
        'ftbic:smelting/ores/uranium_to_ingot',
        'ftbic:smelting/ores/aluminum_to_ingot',
        'ftbic:smelting/raw_materials/lead_to_ingot',
        'ftbic:smelting/raw_materials/tin_to_ingot',
        'ftbic:smelting/raw_materials/uranium_to_ingot',
        'ftbic:smelting/raw_materials/aluminum_to_ingot',
        'immersiveengineering:smelting/copper_ingot_from_dust',
        'immersiveengineering:smelting/gold_ingot_from_dust',
        'immersiveengineering:smelting/ingot_electrum_from_dust',
        'immersiveengineering:smelting/ingot_constantan_from_dust',
        'immersiveengineering:smelting/ingot_uranium',
        'immersiveengineering:smelting/ingot_uranium2',
        'immersiveengineering:smelting/ingot_uranium3',
        'immersiveengineering:smelting/ingot_aluminum',
        'immersiveengineering:smelting/ingot_aluminum2',
        'immersiveengineering:smelting/ingot_aluminum3',
        'immersiveengineering:smelting/ingot_silver',
        'immersiveengineering:smelting/ingot_silver2',
        'immersiveengineering:smelting/ingot_silver3',
        'immersiveengineering:smelting/ingot_uranium_from_dust',
        'immersiveengineering:smelting/ingot_lead',
        'immersiveengineering:smelting/ingot_lead2',
        'immersiveengineering:smelting/ingot_lead3',
        'immersiveengineering:smelting/ingot_lead_from_dust',
        'immersiveengineering:smelting/ingot_silver_from_dust',
        'immersiveengineering:smelting/ingot_nickel',
        'immersiveengineering:smelting/ingot_nickel2',
        'immersiveengineering:smelting/ingot_nickel3',
        'immersiveengineering:smelting/ingot_nickel_from_dust',
        'immersiveengineering:smelting/ingot_aluminum_from_dust',
        'immersiveengineering:smelting/ingot_steel_from_dust',
        'immersiveengineering:smelting/iron_ingot_from_dust',
        'infernalexp:smelting/iron_ingot',
        'mekanism:processing/bronze/ingot/from_dust_smelting',
        'mekanism:processing/copper/ingot/from_dust_smelting',
        'mekanism:processing/gold/ingot/from_dust_smelting',
        'mekanism:processing/iron/ingot/from_dust_smelting',
        'mekanism:processing/lead/ingot/from_dust_smelting',
        'mekanism:processing/lead/ingot/from_raw_smelting',
        'mekanism:processing/tin/ingot/from_dust_smelting',
        'mekanism:processing/tin/ingot/from_raw_smelting',
        'minecraft:copper_ingot_from_smelting_deepslate_copper_ore',
        'minecraft:gold_ingot_from_smelting_deepslate_gold_ore',
        'minecraft:gold_ingot_from_smelting_nether_gold_ore',
        'minecraft:iron_ingot_from_smelting_deepslate_iron_ore',
        'occultism:smelting/copper_ingot_from_dust',
        'occultism:smelting/gold_ingot_from_dust',
        'occultism:smelting/iron_ingot_from_dust',
        'occultism:smelting/silver_ingot_from_dust',
        'occultism:smelting/silver_ingot_from_raw',
        'thermal:smelting/lead_ingot_from_deepslate_ore_smelting',
        'thermal:smelting/lead_ingot_from_ore_smelting',
        'thermal:smelting/netherite_ingot_from_dust_smelting',
        'thermal:smelting/nickel_ingot_from_deepslate_ore_smelting',
        'thermal:smelting/silver_ingot_from_deepslate_ore_smelting',
        'thermal:smelting/silver_ingot_from_ore_smelting',
        'thermal:smelting/tin_ingot_from_deepslate_ore_smelting',
        'thermal:smelting/tin_ingot_from_ore_smelting',
        'undergarden:smelt_depthrock_gold_ore',
        'undergarden:smelt_depthrock_iron_ore',
        'undergarden:smelt_shiverstone_gold_ore',
        'undergarden:smelt_shiverstone_iron_ore',
        'alchemistry:copper_ingot_from_blasting_copper_dust',
        'alchemistry:gold_ingot_from_blasting_gold_dust',
        'alchemistry:iron_ingot_from_blasting_iron_dust',
        'beyond_earth:blasting/copper_ingot_from_glacio_ore',
        'beyond_earth:blasting/gold_ingot_from_venus_ore',
        'beyond_earth:blasting/iron_ingot_from_glacio_ore',
        'beyond_earth:blasting/iron_ingot_from_mars_ore',
        'beyond_earth:blasting/iron_ingot_from_mercury_ore',
        'beyond_earth:blasting/iron_ingot_from_moon_ore',
        'bloodmagic:smelting/blasting_ingot_copper',
        'bloodmagic:smelting/blasting_ingot_gold',
        'bloodmagic:smelting/blasting_ingot_iron',
        'byg:gold_ingot_from_blasting_blue_nether_gold_ore',
        'byg:gold_ingot_from_blasting_brimstone_nether_gold_ore',
        'chemlib:lead_ingot_from_blasting_lead_dust',
        'chemlib:nickel_ingot_from_blasting_nickel_dust',
        'chemlib:osmium_ingot_from_blasting_osmium_dust',
        'chemlib:uranium_ingot_from_blasting_uranium_dust',
        'chemlib:tin_ingot_from_blasting_tin_dust',
        'chemlib:silver_ingot_from_blasting_silver_dust',
        'create:blasting/ingot_lead_compat_immersiveengineering',
        'create:blasting/ingot_lead_compat_mekanism',
        'create:blasting/ingot_nickel_compat_immersiveengineering',
        'create:blasting/ingot_tin_compat_mekanism',
        'create:blasting/ingot_uranium_compat_immersiveengineering',
        'create:blasting/ingot_silver_compat_immersiveengineering',
        'darkerdepths:gold_ingot_from_blasting_aridrock_gold_ore',
        'darkerdepths:gold_ingot_from_blasting_limestone_gold_ore',
        'darkerdepths:iron_ingot_from_blasting_aridrock_iron_ore',
        'darkerdepths:iron_ingot_from_blasting_limestone_iron_ore',
        'darkerdepths:silver_ingot_from_blasting_aridrock_silver_ore',
        'darkerdepths:silver_ingot_from_blasting_limestone_silver_ore',
        'ftbic:blasting/dusts/bronze_to_ingot',
        'ftbic:blasting/dusts/copper_to_copper_ingot',
        'ftbic:blasting/dusts/enderium_to_ingot',
        'ftbic:blasting/dusts/gold_to_gold_ingot',
        'ftbic:blasting/dusts/iron_to_iron_ingot',
        'ftbic:blasting/dusts/lead_to_ingot',
        'ftbic:blasting/dusts/tin_to_ingot',
        'ftbic:blasting/dusts/uranium_to_ingot',
        'ftbic:blasting/dusts/aluminum_to_ingot',
        'ftbic:blasting/dusts/iridium_to_ingot',
        'ftbic:blasting/ores/lead_to_ingot',
        'ftbic:blasting/ores/tin_to_ingot',
        'ftbic:blasting/ores/uranium_to_ingot',
        'ftbic:blasting/ores/aluminum_to_ingot',
        'ftbic:blasting/raw_materials/lead_to_ingot',
        'ftbic:blasting/raw_materials/tin_to_ingot',
        'ftbic:blasting/raw_materials/uranium_to_ingot',
        'ftbic:blasting/raw_materials/aluminum_to_ingot',
        'immersiveengineering:smelting/copper_ingot_from_dust_from_blasting',
        'immersiveengineering:smelting/gold_ingot_from_dust_from_blasting',
        'immersiveengineering:smelting/ingot_electrum_from_dust_from_blasting',
        'immersiveengineering:smelting/ingot_constantan_from_dust_from_blasting',
        'immersiveengineering:smelting/ingot_uranium_from_blasting',
        'immersiveengineering:smelting/ingot_uranium_from_blasting2',
        'immersiveengineering:smelting/ingot_uranium_from_blasting3',
        'immersiveengineering:smelting/ingot_aluminum_from_blasting',
        'immersiveengineering:smelting/ingot_aluminum_from_blasting2',
        'immersiveengineering:smelting/ingot_aluminum_from_blasting3',
        'immersiveengineering:smelting/ingot_silver_from_blasting',
        'immersiveengineering:smelting/ingot_silver_from_blasting2',
        'immersiveengineering:smelting/ingot_silver_from_blasting3',
        'immersiveengineering:smelting/ingot_lead_from_blasting',
        'immersiveengineering:smelting/ingot_lead_from_blasting2',
        'immersiveengineering:smelting/ingot_lead_from_blasting3',
        'immersiveengineering:smelting/ingot_lead_from_dust_from_blasting',
        'immersiveengineering:smelting/ingot_silver_from_dust_from_blasting',
        'immersiveengineering:smelting/ingot_aluminum_from_dust_from_blasting',
        'immersiveengineering:smelting/ingot_uranium_from_dust_from_blasting',
        'immersiveengineering:smelting/ingot_nickel_from_blasting',
        'immersiveengineering:smelting/ingot_nickel_from_blasting2',
        'immersiveengineering:smelting/ingot_nickel_from_blasting3',
        'immersiveengineering:smelting/ingot_nickel_from_dust_from_blasting',
        'immersiveengineering:smelting/ingot_steel_from_dust_from_blasting',
        'immersiveengineering:smelting/iron_ingot_from_dust_from_blasting',
        'infernalexp:blasting/iron_ingot',
        'mekanism:processing/bronze/ingot/from_dust_blasting',
        'mekanism:processing/copper/ingot/from_dust_blasting',
        'mekanism:processing/gold/ingot/from_dust_blasting',
        'mekanism:processing/iron/ingot/from_dust_blasting',
        'mekanism:processing/lead/ingot/from_dust_blasting',
        'mekanism:processing/lead/ingot/from_raw_blasting',
        'mekanism:processing/tin/ingot/from_dust_blasting',
        'mekanism:processing/tin/ingot/from_raw_blasting',
        'minecraft:copper_ingot_from_blasting_deepslate_copper_ore',
        'minecraft:gold_ingot_from_blasting_deepslate_gold_ore',
        'minecraft:gold_ingot_from_blasting_nether_gold_ore',
        'minecraft:iron_ingot_from_blasting_deepslate_iron_ore',
        'occultism:blasting/copper_ingot_from_dust',
        'occultism:blasting/gold_ingot_from_dust',
        'occultism:blasting/iron_ingot_from_dust',
        'occultism:blasting/silver_ingot_from_dust',
        'occultism:blasting/silver_ingot_from_raw',
        'thermal:smelting/lead_ingot_from_deepslate_ore_blasting',
        'thermal:smelting/lead_ingot_from_ore_blasting',
        'thermal:smelting/netherite_ingot_from_dust_blasting',
        'thermal:smelting/nickel_ingot_from_deepslate_ore_blasting',
        'thermal:smelting/tin_ingot_from_deepslate_ore_blasting',
        'thermal:smelting/tin_ingot_from_ore_blasting',
        'thermal:smelting/silver_ingot_from_deepslate_ore_blasting',
        'thermal:smelting/silver_ingot_from_ore_blasting',
        'undergarden:blast_depthrock_gold_ore',
        'undergarden:blast_depthrock_iron_ore',
        'undergarden:blast_shiverstone_gold_ore',
        'undergarden:blast_shiverstone_iron_ore',
        'ironfurnaces:augments/augment_xp',
        'ae2:blasting/silicon_from_certus_quartz_dust',
        'ae2:smelting/silicon_from_certus_quartz_dust',
        'create:fill_minecraft_bucket_with_tconstruct_honey',
        'miniutilities:gold_angel_ring',
        'miniutilities:ender_dragon_angel_ring',
        'miniutilities:feather_angel_ring',
        'miniutilities:bat_angel_ring',
        'miniutilities:peacock_angel_ring',
        'miniutilities:angel_ring_crafting',
        'evilcraft:crafting/weather_container_lightning',
        'evilcraft:crafting/weather_container_rain',
        'thermal_extra:dragonsteel_dust',
        'thermal_extra:soul_infused_dust',
        'thermal_extra:shellite_dust',
        'thermal_extra:twinite_dust',
        'miniutilities:cursed_earth',
        'miniutilities:blessed_earth',
        'miniutilities:blursed_earth',
        'avaritia:extreme_crafting_table',
        "minecraft:bread",
        "chemlib:cobalt_nugget_to_ingot",
        "chemlib:cobalt_block_to_ingot",
        "chemlib:cobalt_ingot_to_nugget",
        "chemlib:cobalt_ingot_to_block",
        'chemlib:iridium_ingot_to_block',
        'chemlib:osmium_ingot_to_block',
        'chemlib:lead_ingot_to_block',
        'minecraft:comparator',
        'tinkers_reforged:smeltery/melting/coal/gem',
        'twilightforest:smeltery/melting/metal/fiery/nugget',
        'minecraft:magma_cream',
        'infernalexp:smelting/basalt_cobbled',
        'twilightforest:giant_log_to_oak_planks',
        'twilightforest:giant_leaves_to_oak_leaves',
        'twilightforest:giant_cobblestone_to_cobblestone',
        'hostilenetworks:deep_learner',
        'beyond_earth_giselle_addon:compat/thermal/refinery/refinery_oil',
        'beyond_earth_giselle_addon:compat/industrialforegoing/laser_drill_fluid/oil',
        'twilightdelight:steeleaf_knife',
        'twilightdelight:fiery_knife',
        'twilightdelight:fiery_knife_1',
        'twilightdelight:ironwood_knife',
        'twilightdelight:knightmetal_knife',
        'create_sa:quartz_gem_crushing',
        'thermal:rockwool/white_rockwool_from_smelting',
        'blue_skies:furnace_compat',
        'ae2additions:cells/item/disk-256-casing',
        'ae2additions:cells/item/disk-256',
        'sebastrnlib:sebastrn_mods_guide_book_recipe_shapeless',
        'packagedavaritia:extreme_crafter_ae',
        'tconstruct:common/basalt_blast_furnace',
        'quark:building/crafting/furnaces/blackstone_blast_furnace',
        'quark:building/crafting/furnaces/deepslate_blast_furnace',
        'infernalexp:crafting/crafting_shaped/blast_furnace_from_smooth_stones',
        'infernalexp:smelting/soul_stone',
        'minecraft:end_crystal',
    ]
    removeId.forEach(C => { r(C) })
})