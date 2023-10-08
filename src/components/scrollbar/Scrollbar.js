import { memo } from 'react';
import { StyledRootScrollbar } from './styles';

function Scrollbar({ children, sx, ...other }) {


        return (
            <StyledRootScrollbar sx={{  height: 'calc(100% - 20px)', 
            overflowY: 'auto', ...sx }} {...other}>
                {children}
            </StyledRootScrollbar>
        );

 
}

export default memo(Scrollbar);