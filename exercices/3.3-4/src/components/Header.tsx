type HeaderProps = {
  urlLogo: string;
  theme: string;
  toggleTheme: () => void;
  children: React.ReactNode;
};

function Header({ urlLogo, theme, toggleTheme, children }: HeaderProps) {
  return (
    <header className={theme === "light" ? "header-light" : "header-dark"}>
      <img src={urlLogo} alt="logo" />
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair"}
      </button>
      {children}
    </header>
  );
}

export default Header;
