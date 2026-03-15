import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

type AvailableThemes = 'light' | 'dark';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme = localStorage.getItem('theme') as AvailableThemes || "dark";
    return savedTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  function handleTheme(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
  }
  useEffect(() => {document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#' title="Home">
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href='#' title="History">
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href='#' title="Settings">
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href='#' title="Theme" onClick={handleTheme}>
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}

