import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="fixed top-0 z-50 h-16 bg-yellow-500 lg:h-32">
      <nav>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Bücher</li>
            <li><a href="/">Über uns</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
});
