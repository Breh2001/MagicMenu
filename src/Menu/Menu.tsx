import React, {Component} from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ForumIcon from '@mui/icons-material/Forum';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SettingsIcon from '@mui/icons-material/Settings';
import Styles from './Menu.module.scss';

interface MenuProps {
}

interface MenuState {
    currentSelected: string;
    currentIcon0: string;
    currentText0: string;
    currentIcon1: string;
    currentText1: string;
    currentIcon2: string;
    currentText2: string;
    currentIcon3: string;
    currentText3: string;
    currentIcon4: string;
    currentText4: string;
}

export class Menu extends Component<MenuProps, MenuState> {
    constructor(MenuProps: MenuProps | Readonly<MenuProps>) {
        super(MenuProps);

        this.state = {
            currentSelected: Styles.optionSelected + ' ' + Styles.optionSelected0,
            currentIcon0: Styles.menuIcon + ' ' + Styles.menuActiveIcon,
            currentText0: Styles.menuText + ' ' + Styles.menuActiveText,
            currentIcon1: Styles.menuIcon,
            currentText1: Styles.menuText,
            currentIcon2: Styles.menuIcon,
            currentText2: Styles.menuText,
            currentIcon3: Styles.menuIcon,
            currentText3: Styles.menuText,
            currentIcon4: Styles.menuIcon,
            currentText4: Styles.menuText,
        }

        this.changeSelection = this.changeSelection.bind(this);
    };

    private changeSelection(id: string) {
        let currentSelected = Styles.optionSelected;
        const allIcons: string = Styles.menuIcon;
        const currentIcon: string = Styles.menuIcon + ' ' + Styles.menuActiveIcon;
        const allTexts: string = Styles.menuText;
        const currentText: string = Styles.menuText + ' ' + Styles.menuActiveText;

        let currentIcon0: string = allIcons;
        let currentText0: string = allTexts;
        let currentIcon1: string = allIcons;
        let currentText1: string = allTexts;
        let currentIcon2: string = allIcons;
        let currentText2: string = allTexts;
        let currentIcon3: string = allIcons;
        let currentText3: string = allTexts;
        let currentIcon4: string = allIcons;
        let currentText4: string = allTexts;
        
        switch (id) {
            case 'home':
                currentSelected = Styles.optionSelected + ' ' + Styles.optionSelected0;
                currentIcon0 = currentIcon;
                currentText0 = currentText;
            break;
            case 'perfil':
                currentSelected = Styles.optionSelected + ' ' + Styles.optionSelected1;
                currentIcon1 = currentIcon;
                currentText1 = currentText;
            break;
            case 'chat':
                currentSelected = Styles.optionSelected + ' ' + Styles.optionSelected2;
                currentIcon2 = currentIcon;
                currentText2 = currentText;
            break;
            case 'photo':
                currentSelected = Styles.optionSelected + ' ' + Styles.optionSelected3;
                currentIcon3 = currentIcon;
                currentText3 = currentText;
            break;
            case 'settings':
                currentSelected = Styles.optionSelected + ' ' + Styles.optionSelected4;
                currentIcon4 = currentIcon;
                currentText4 = currentText;
            break;
        }

        this.setState({currentSelected: currentSelected, 
            currentIcon0: currentIcon0, currentText0: currentText0,
            currentIcon1: currentIcon1, currentText1: currentText1,
            currentIcon2: currentIcon2, currentText2: currentText2,
            currentIcon3: currentIcon3, currentText3: currentText3,
            currentIcon4: currentIcon4, currentText4: currentText4,
        });
    }

    render() {
        return (
            <div className={Styles.menu}>
                <ul>
                    <li onClick={() => this.changeSelection('home')}>
                        <div className={Styles.menuOption}>
                        <span className={this.state.currentIcon0}>
                            <HomeRoundedIcon/>
                        </span>
                        <span className={this.state.currentText0}>Home</span>
                        </div>
                    </li>
                    <li onClick={() => this.changeSelection('perfil')}>
                        <div className={Styles.menuOption}>
                            <span className={this.state.currentIcon1}>
                                <PersonSharpIcon/>
                            </span>
                            <span className={this.state.currentText1}>Perfil</span>
                        </div>
                    </li>
                    <li onClick={() => this.changeSelection('chat')}>
                        <div className={Styles.menuOption}>
                            <span className={this.state.currentIcon2}>
                                <ForumIcon/>
                            </span>
                            <span className={this.state.currentText2}>Conversa</span>
                        </div>
                    </li>
                    <li onClick={() => this.changeSelection('photo')}>
                        <div className={Styles.menuOption}>
                            <span className={this.state.currentIcon3}>
                                <PhotoCameraIcon/>
                            </span>
                            <span className={this.state.currentText3}>Fotos</span>
                        </div>
                    </li>
                    <li onClick={() => this.changeSelection('settings')}>
                        <div className={Styles.menuOption}>
                            <span className={this.state.currentIcon4}>
                                <SettingsIcon/>
                            </span>
                            <span className={this.state.currentText4}>Config</span>
                        </div>
                    </li>
                    <div className={this.state.currentSelected}></div>
                </ul>
            </div>
        )
    }
}
