import SPELLS from 'common/SPELLS/classic/paladin';
import CoreAbilities from 'parser/core/modules/Abilities';
import SPELL_CATEGORY from 'parser/core/SPELL_CATEGORY';

class Abilities extends CoreAbilities {
  spellbook() {
    const combatant = this.selectedCombatant;
    return [
      // Rotational
      {
        spell: [SPELLS.FLASH_OF_LIGHT.id, ...SPELLS.FLASH_OF_LIGHT.lowRanks],
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.HOLY_LIGHT.id, ...SPELLS.HOLY_LIGHT.lowRanks],
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.SACRED_SHIELD.id],
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: { base: 1500 },
      },
      // Rotational AOE
      // Cooldowns
      {
        spell: [SPELLS.AVENGING_WRATH.id],
        category: SPELL_CATEGORY.COOLDOWNS,
        gcd: null,
        cooldown: 180,
      },
      {
        spell: [SPELLS.AURA_MASTERY.id],
        category: SPELL_CATEGORY.COOLDOWNS,
        gcd: null,
        enabled: combatant.talentPoints[0] >= 10,
        cooldown: 120,
      },
      {
        spell: [SPELLS.DIVINE_FAVOR.id],
        category: SPELL_CATEGORY.COOLDOWNS,
        gcd: null,
        enabled: combatant.talentPoints[0] >= 20,
        cooldown: 120,
      },
      {
        spell: [SPELLS.DIVINE_ILLUMINATION.id],
        category: SPELL_CATEGORY.COOLDOWNS,
        gcd: null,
        enabled: combatant.talentPoints[0] >= 40,
        cooldown: 180,
      },
      {
        spell: [SPELLS.DIVINE_PLEA.id],
        category: SPELL_CATEGORY.COOLDOWNS,
        gcd: { base: 1500 },
        cooldown: 60,
      },
      {
        spell: [SPELLS.DIVINE_SACRIFICE.id],
        category: SPELL_CATEGORY.COOLDOWNS,
        gcd: { base: 1500 },
        enabled: combatant.talentPoints[1] >= 10,
        cooldown: 120,
      },
      {
        spell: [SPELLS.LAY_ON_HANDS.id, ...SPELLS.LAY_ON_HANDS.lowRanks],
        category: SPELL_CATEGORY.COOLDOWNS,
        gcd: { base: 1500 },
      },
      // Defensive
      {
        spell: [SPELLS.DIVINE_PROTECTION.id],
        category: SPELL_CATEGORY.DEFENSIVE,
        gcd: { base: 1500 },
        cooldown: 180,
      },
      {
        spell: [SPELLS.DIVINE_SHIELD.id],
        category: SPELL_CATEGORY.DEFENSIVE,
        gcd: { base: 1500 },
        cooldown: 300,
      },
      // Other spells (not apart of the normal rotation)
      {
        spell: [SPELLS.HOLY_SHOCK.id, ...SPELLS.HOLY_SHOCK.lowRanks],
        category: SPELL_CATEGORY.OTHERS,
        gcd: { base: 1500 },
        enabled: combatant.talentPoints[0] >= 30,
      },
      {
        spell: [SPELLS.SEARING_LIGHT.id],
        category: SPELL_CATEGORY.OTHERS,
        gcd: null,
      },
      // Utility
      {
        spell: [SPELLS.BEACON_OF_LIGHT.id],
        category: SPELL_CATEGORY.UTILITY,
        gcd: { base: 1500 },
        enabled: combatant.talentPoints[0] >= 50,
      },
      {
        spell: [SPELLS.JUDGEMENT_OF_WISDOM.id],
        category: SPELL_CATEGORY.UTILITY,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.JUDGEMENT_OF_JUSTICE.id],
        category: SPELL_CATEGORY.UTILITY,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.HAMMER_OF_JUSTICE.id, ...SPELLS.HAMMER_OF_JUSTICE.lowRanks],
        category: SPELL_CATEGORY.UTILITY,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.CLEANSE.id],
        category: SPELL_CATEGORY.UTILITY,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.PURIFY.id],
        category: SPELL_CATEGORY.UTILITY,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.HAND_OF_SALVATION.id],
        category: SPELL_CATEGORY.UTILITY,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.HAND_OF_PROTECTION.id, ...SPELLS.HAND_OF_PROTECTION.lowRanks],
        category: SPELL_CATEGORY.UTILITY,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.HAND_OF_FREEDOM.id],
        category: SPELL_CATEGORY.UTILITY,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.HAND_OF_SACRIFICE.id],
        category: SPELL_CATEGORY.UTILITY,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.DIVINE_INTERVENTION.id],
        category: SPELL_CATEGORY.UTILITY,
        gcd: { base: 1500 },
      },
      // Pet Related
      // Consumable
    ];
  }
}

export default Abilities;
