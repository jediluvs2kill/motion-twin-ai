export type Handedness = "left" | "right" | "ambidextrous";

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface ImuSample {
  timestampNs: bigint;
  accelerationMps2: Vector3;
  angularVelocityRadS: Vector3;
  orientationQuaternion?: [number, number, number, number];
}

export interface MotionOutcome {
  score?: number;
  hitCoordinates?: { x: number; y: number };
  coachRating?: number;
  tags?: string[];
}

export interface MotionEpisode {
  episodeId: string;
  athleteId: string;
  sport: string;
  movement: string;
  dominantHand: Handedness;
  startedAt: string;
  leftImuUri?: string;
  rightImuUri?: string;
  videoUri?: string;
  pose3dUri?: string;
  outcome: MotionOutcome;
  syncErrorMs?: number;
  poseConfidence?: number;
  consentPolicyId: string;
}
