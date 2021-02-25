import SiteHeader from './Header';

export default function MainLayout({ children }) {
  return (
    <div className="main-layout-grid bg-dark-default text-light-default min-h-screen">
      <SiteHeader className="" />
      <main className="min-h-full">
        {children}
      </main>
    </div>
  );
}
