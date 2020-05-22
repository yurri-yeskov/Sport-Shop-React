import React, { useState, useCallback, useRef } from 'react';
import List, {
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemAction,
    ListSubheader
} from '@components/List';
import ShoppingBasketIcon from '@svg-icons/material/ShoppingBasketIcon';
import FavoriteOutlineIcon from '@svg-icons/material/FavoriteOutlineIcon';
import Checkbox from '@components/Checkbox';
import Divider from '@components/Divider';
import Button from '@components/Button';
import ShoppingCartIcon from '@svg-icons/feather/ShoppingCartIcon';
import IconButton from '@components/IconButton';
import CreatemodeEditIcon from '@svg-icons/material/CreatemodeEditIcon';
import ClearCloseIcon from '@svg-icons/material/ClearCloseIcon';
import SearchIcon from '@svg-icons/feather/SearchIcon';
import Input from '@components/Input';
import useDocumentEventListener from '@components/hooks/useDocumentEventListener';

const TestList = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [checked, setChecked] = useState([]);
    const checkedListRef = useRef(null);

    const handleItemClick = useCallback(
        (index) => (ev) => {
            setSelectedIndex(index);
        },
        []
    );

    const handleChecked = useCallback(
        (value) => (ev) => {
            const currentIndex = checked.indexOf(value);
            const newState = [...checked];

            if (currentIndex !== -1) {
                newState.splice(currentIndex, 1);
            } else {
                newState.push(value);
            }

            setChecked(newState);
        },
        [checked]
    );

    const handleDeleteClick = (ev) => {
        console.log(ev);
    };

    useDocumentEventListener('click', (ev) => {
        if (!checkedListRef.current.contains(ev.target)) {
            console.log('clicked outside');
        }
    });

    const checkedItems = [1, 2, 3, 4];

    return (
        <>
            <div
                style={{
                    maxWidth: '50rem',
                    width: '100%'
                }}
            >
                <List style={{ background: '#fff', marginBottom: '1.6rem' }}>
                    <ListSubheader>Search history</ListSubheader>
                    <ListItem button selected={selectedIndex === 0} onClick={handleItemClick(0)}>
                        <ListItemIcon>
                            <SearchIcon size="medium" />
                        </ListItemIcon>
                        <ListItemText truncate flex>
                            Lorem ipsum dolor sit, amet consectetur
                        </ListItemText>
                        <ListItemAction>
                            <IconButton size="small" tabIndex="-1">
                                <ClearCloseIcon />
                            </IconButton>
                        </ListItemAction>
                    </ListItem>
                    <ListItem
                        button
                        disabled
                        selected={selectedIndex === 1}
                        onClick={handleItemClick(1)}
                    >
                        <ListItemIcon>
                            <SearchIcon size="medium" />
                        </ListItemIcon>
                        <ListItemText truncate flex>
                            Lorem ipsum dolor sit, amet consectetur
                        </ListItemText>
                        <ListItemAction>
                            <IconButton size="small" tabIndex="-1">
                                <ClearCloseIcon />
                            </IconButton>
                        </ListItemAction>
                    </ListItem>
                    <ListItem button selected={selectedIndex === 2} onClick={handleItemClick(2)}>
                        <ListItemIcon>
                            <SearchIcon size="medium" />
                        </ListItemIcon>
                        <ListItemText truncate flex>
                            Lorem ipsum dolor sit, amet consectetur
                        </ListItemText>
                        <ListItemAction>
                            <IconButton size="small" tabIndex="-1" onClick={handleDeleteClick}>
                                <ClearCloseIcon />
                            </IconButton>
                        </ListItemAction>
                    </ListItem>
                </List>
                <List style={{ background: '#fff', marginBottom: '1.6rem' }} ref={checkedListRef}>
                    <ListSubheader>Brands</ListSubheader>
                    {checkedItems.map((item) => (
                        <ListItem
                            key={item}
                            button
                            disabled={item === 1}
                            onClick={handleChecked(item)}
                        >
                            <ListItemAction>
                                <Checkbox
                                    checked={checked.indexOf(item) !== -1}
                                    disabled={item === 1}
                                    tabIndex="-1"
                                />
                            </ListItemAction>
                            <ListItemText flex>
                                Lorem ipsum dolor sit, amet consectetur
                            </ListItemText>
                            <ListItemText>(34)</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </div>
        </>
    );
};

export default TestList;
