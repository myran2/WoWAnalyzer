import CoreCombatLogParser from 'parser/core/CombatLogParser';
import DamageDone from 'parser/shared/modules/DamageDone';

// Features
import Checklist from './modules/features/Checklist/Module';
import Abilities from './modules/Abilities';
import AlwaysBeCasting from './modules/features/AlwaysBeCasting';
//import CooldownThroughputTracker from './modules/features/CooldownThroughputTracker';
import SpellUsable from './modules/features/SpellUsable';
import Channeling from './modules/features/Channeling';
import RageUsage from './modules/features/RageUsage';

// Core
import TacticianProc from './modules/core/TacticianProc';
import Overpower from './modules/core/Overpower';

// Execute Range
import Rend from './modules/core/Execute/Rend';
import MortalStrike from './modules/core/Execute/MortalStrike';
import ExecuteRange from './modules/core/Execute/ExecuteRange';

// Dots
import DeepWoundsUptime from './modules/core/Dots/DeepWoundsUptime';
import RendUptime from './modules/core/Dots/RendUptime';
import DotUptimes from './modules/core/Dots';

// Talents
import Talents from './modules/talents';
import AngerManagement from './modules/talents/AngerManagement';
import DefensiveStance from './modules/talents/DefensiveStance';
import Skullsplitter from './modules/talents/Skullsplitter';
import SuddenDeath from './modules/talents/SuddenDeath';
import WarMachine from './modules/talents/WarMachine';
import StormBolt from './modules/talents/StormBolt';
import ImpendingVictory from './modules/talents/ImpendingVictory';
//import FervorOfBattle from './modules/talents/FervorOfBattle';
import SecondWind from './modules/talents/SecondWind';
import Cleave from './modules/talents/Cleave';
import Warbreaker from './modules/talents/Warbreaker';
import Avatar from './modules/talents/Avatar';
import Ravager from './modules/talents/Ravager';

// Azerite Traits
import ExecutionersPrecision from './modules/spells/azeritetraits/ExecutionersPrecision';
import SeismicWave from './modules/spells/azeritetraits/SeismicWave';
import TestOfMight from './modules/spells/azeritetraits/TestOfMight';

class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    // WarriorCore
    damageDone: [DamageDone, { showStatistic: true }],
    abilities: Abilities,

    // Features
    checklist: Checklist,
    alwaysBeCasting: AlwaysBeCasting,
    //cooldownThroughputTracker: CooldownThroughputTracker,
    spellUsable: SpellUsable,
    channeling: Channeling,
    rageUsage: RageUsage,

    // Core
    tacticianProc: TacticianProc,
    overpower: Overpower,

    // Execute range
    executeRange: ExecuteRange,
    rend: Rend,
    mortalStrike: MortalStrike,

    // Dots
    deepWoundsUptime: DeepWoundsUptime,
    rendUptime: RendUptime,
    dotUptimes: DotUptimes,

    // Talents
    talents: Talents,
    angerManagement: AngerManagement,
    defensiveStance: DefensiveStance,
    skullsplitter: Skullsplitter,
    suddenDeath: SuddenDeath,
    warMachine: WarMachine,
    stormBolt: StormBolt,
    impendingVictory: ImpendingVictory,
    //fervorOfBattle: FervorOfBattle,
    secondWind: SecondWind,
    cleave: Cleave,
    warbreaker: Warbreaker,
    avatar: Avatar,
    ravager: Ravager,

    // Azerite traits
    executionersPrecision: ExecutionersPrecision,
    seismicWave: SeismicWave,
    testOfMight: TestOfMight,
  };
}

export default CombatLogParser;
