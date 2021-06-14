initSidebarItems({"fn":[["validate_untrusted_wasm","Validate an untrusted wasm code with restrictions that we place such code (e.g. transaction and validity predicates)"]],"mod":[["host_env","Virtual machine’s host environment exposes functions that may be called from within a virtual machine."],["memory","Virtual machine’s memory."],["prefix_iter","The storage prefix iterators can be used to iterate over a common prefix of storage keys."],["types","VM types can be passed between the host and guest via wasm linear memory."],["wasm","Modules related to wasm"]],"struct":[["EnvHostSliceWrapper","This is used to attach the Ledger’s host structures to wasm environment, which is used for implementing some host calls. It wraps an immutable slice, so the access is thread-safe, but because of the unsafe slice conversion, care must be taken that while this slice is borrowed, no other process can modify it."],["EnvHostWrapper","This is used to attach the Ledger’s host structures to wasm environment, which is used for implementing some host calls. It wraps an immutable reference, so the access is thread-safe, but because of the unsafe reference conversion, care must be taken that while this reference is borrowed, no other process can modify it."],["MutEnvHostSliceWrapper","This is used to attach the Ledger’s host structures to wasm environment, which is used for implementing some host calls. It wraps an mutable slice, so the access is thread-safe, but because of the unsafe slice conversion, care must be taken that while this slice is borrowed, no other process can modify it."],["MutEnvHostWrapper","This is used to attach the Ledger’s host structures to wasm environment, which is used for implementing some host calls. Because it’s mutable, it’s not thread-safe. Also, care must be taken that while this reference is borrowed, no other process can read or modify it."]]});