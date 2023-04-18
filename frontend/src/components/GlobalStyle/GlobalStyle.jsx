import classNames from 'classnames/bind';
import styles from './GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function GlobalStyle({ children }) {
    return children;
}

export default GlobalStyle;
