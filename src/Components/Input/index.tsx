import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import colors from '../../Theme/colors';

const Input = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: colors.border,
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: colors.orange,
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderColor: colors.gray,
  },
});

export default Input;
