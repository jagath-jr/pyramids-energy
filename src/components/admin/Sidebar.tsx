export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 text-white h-screen overflow-y-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="space-y-4">
          {/* Add admin navigation items here */}
          <a href="/admin/dashboard" className="block hover:text-gray-300">Dashboard</a>
          <a href="/admin/home" className="block hover:text-gray-300">Home</a>
          <a href="/admin/about" className="block hover:text-gray-300">About</a>
          <a href="/admin/services" className="block hover:text-gray-300">Services</a>
          <a href="/admin/gallery" className="block hover:text-gray-300">Gallery</a>
          <a href="/admin/projects" className="block hover:text-gray-300">Projects</a>
          <a href="/admin/careers" className="block hover:text-gray-300">Careers</a>
          <a href="/admin/settings" className="block hover:text-gray-300">Settings</a>
        </nav>
      </div>
    </aside>
  );
}
