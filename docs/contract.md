# Contract Design

RemitStudy Vault follows the three-part Soroban guide:

1. Struct + impl: `contract/src/lib.rs`
2. Storage: `contract/src/storage.rs`
3. Errors + types: `contract/src/errors.rs` and `contract/src/types.rs`

## Domain API

- `open_student_vault`: open a student vault.
- `fund_tuition_escrow`: transfer XLM SAC into contract escrow.
- `mark_school_progress`: admin/verifier records score and status.
- `release_tuition`: transfer approved funds out of contract escrow.

Storage TTL is extended for both instance and persistent keys.
