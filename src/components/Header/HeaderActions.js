import React from 'react';

import IconButton from '@ui/IconButton';
import ShoppingCartIcon from '@svg-icons/feather/ShoppingCartIcon';
import HeaderWishlistAction from './HeaderWishlistAction';

const HeaderActions = () => {
    return (
        <div className="header__actions">
            <HeaderWishlistAction />
            <IconButton primary size="large">
                <ShoppingCartIcon />
            </IconButton>
        </div>
    );
};

export default HeaderActions;
