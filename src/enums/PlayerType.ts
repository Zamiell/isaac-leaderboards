/* eslint-disable isaacscript/no-number-enums */

/**
 * For `EntityType.PLAYER` (1), `PlayerVariant.PLAYER` (0).
 *
 * This is the sub-type of a player.
 *
 * Conventionally, variables that have this type are represented as "character" instead of
 * "playerType", since the former is more descriptive of what this value actually represents.
 *
 * This enum is copied from IsaacScript.
 */
export enum PlayerType {
  /** Used in the secret Possessor Mode added in Repentance. */
  POSSESSOR = -1,

  ISAAC = 0,
  MAGDALENE = 1,
  CAIN = 2,
  JUDAS = 3,
  BLUE_BABY = 4,
  EVE = 5,
  SAMSON = 6,
  AZAZEL = 7,
  LAZARUS = 8,
  EDEN = 9,
  LOST = 10,

  /** Lazarus Risen, from the Lazarus' Rags collectible. */
  LAZARUS_2 = 11,

  /** Dark Judas, from the Judas' Shadow collectible. */
  DARK_JUDAS = 12,

  LILITH = 13,
  KEEPER = 14,
  APOLLYON = 15,
  FORGOTTEN = 16,
  SOUL = 17,
  BETHANY = 18,
  JACOB = 19,
  ESAU = 20,

  /** Tainted Isaac */
  ISAAC_B = 21,

  /** Tainted Magdalene */
  MAGDALENE_B = 22,

  /** Tainted Cain */
  CAIN_B = 23,

  /** Tainted Judas */
  JUDAS_B = 24,

  /** Tainted Blue Baby */
  BLUE_BABY_B = 25,

  /** Tainted Eve */
  EVE_B = 26,

  /** Tainted Samson */
  SAMSON_B = 27,

  /** Tainted Azazel */
  AZAZEL_B = 28,

  /** Tainted Lazarus */
  LAZARUS_B = 29,

  /** Tainted Eden */
  EDEN_B = 30,

  /** Tainted Lost */
  LOST_B = 31,

  /** Tainted Lilith */
  LILITH_B = 32,

  /** Tainted Keeper */
  KEEPER_B = 33,

  /** Tainted Apollyon */
  APOLLYON_B = 34,

  /** Tainted Forgotten */
  FORGOTTEN_B = 35,

  /** Tainted Bethany */
  BETHANY_B = 36,

  /** Tainted Jacob */
  JACOB_B = 37,

  /** Dead Tainted Lazarus */
  LAZARUS_2_B = 38,

  /** Tainted Jacob in "Lost" form. */
  JACOB_2_B = 39,

  /** Tainted Soul */
  SOUL_B = 40,
}
