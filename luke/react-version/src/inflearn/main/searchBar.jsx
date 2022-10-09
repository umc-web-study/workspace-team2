import './searchBar.css'

export default function SearchBar() {
  return (
    <section class="search">
      <div class="search-bar">
        <div class="search-container">
          <div class="search-content">
            <h1>배우고, 나누고, 성장하세요.</h1>
            <div class="search-wrapper">
              <input
                class="search-input"
                type="text"
                placeholder="배우고 싶은 지식을 입력해보세요."
              />
              <button class="search-submit">⚲</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}