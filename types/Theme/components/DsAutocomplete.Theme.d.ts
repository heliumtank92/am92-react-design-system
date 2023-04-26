export default DsAutocomplete;
declare namespace DsAutocomplete {
    namespace MuiAutocomplete {
        namespace styleOverrides {
            const listbox: {
                '.MuiAutocomplete-option': {
                    '&.Mui-focused': {
                        backgroundColor: string;
                    };
                };
            };
            namespace endAdornment {
                const position: string;
                const top: string;
                const display: string;
                const alignItems: string;
                const marginLeft: string;
            }
        }
    }
}
