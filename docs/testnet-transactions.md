# Testnet Transaction Verification

Test date: 2026-06-05

## Summary

RemitStudy Vault was deployed and tested on Stellar testnet with the local Stellar CLI identity `alice`.

## Deployment

- Contract ID: `CBUBYSLWJDFUR2JVKJBUSNWYTEJO6WBIQY4BKPCXVPVLCNW4CVSBNKEK`
- Deploy transaction: https://stellar.expert/explorer/testnet/tx/1d9e7e92e78703dcdc88d05df30edd323398c4e1e9a665e826f4cea0ce3b56eb
- Lab contract page: https://lab.stellar.org/r/testnet/contract/CBUBYSLWJDFUR2JVKJBUSNWYTEJO6WBIQY4BKPCXVPVLCNW4CVSBNKEK

## Transaction Flow Tested

Record ID: `tx-remitstudy-001`

1. `open_student_vault` opened the record.
   Transaction: https://stellar.expert/explorer/testnet/tx/c54bc53296679997c21048c86e7d4ed16970a36ea3aa67387f40a3a6a0470fd5
2. `fund_tuition_escrow` funded escrow with `500000` XLM SAC units.
   Transaction: https://stellar.expert/explorer/testnet/tx/65d2f1b2a41b2d45f3030eadcd1b9a2534d6f149bbddca8cb85e134ad6143b09
3. `mark_school_progress` recorded score `89` and status `progress_verified`.
   Transaction: https://stellar.expert/explorer/testnet/tx/48354dbde39e171a506178e17581bc8c810189be17b18a84fdd8acd0214d9f74
4. `release_tuition` released `250000` XLM SAC units.
   Transaction: https://stellar.expert/explorer/testnet/tx/03c8f2e2e0be2f089f916299d3a1816038381f8557a0931589b2d4b6a6bcd821
5. `total_locked` returned `250000`.
6. `get_record` returned `funded=500000`, `released=250000`, and `status=released`.

## Result

Passed. The contract accepted signed writes, moved testnet XLM SAC through the token interface, emitted events, and returned the expected final state.
