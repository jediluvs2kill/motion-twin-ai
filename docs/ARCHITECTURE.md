# System Architecture

## Edge capture

### Left and right Wear OS devices
- accelerometer
- gyroscope
- rotation vector
- heart rate where permitted
- monotonic timestamps
- local buffering

### Smartphone
- video capture
- session orchestration
- device clock calibration
- offline preview
- upload and retry

## Cloud pipeline

1. Ingest encrypted sensor and video streams
2. Validate timestamps and sampling quality
3. Segment repetitions and sport phases
4. Estimate 2D pose
5. Lift to 3D pose
6. Fuse wrist IMU orientation with visual pose
7. Normalize for athlete dimensions
8. Extract biomechanics and stability features
9. Correlate features with performance labels
10. Generate coach-readable insights

## Deployment profiles

- Consumer cloud
- Academy tenant
- Research environment
- Sovereign or on-premise defence deployment

## Architectural rule

Raw identifiable video, biometric data, derived pose, and reusable model features must be treated as separate data classes with separate consent and retention controls.
