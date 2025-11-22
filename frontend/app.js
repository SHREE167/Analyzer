// frontend/app.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Render Skeleton Cards
    const grid = document.getElementById('results-grid');
    const SKELETON_COUNT = 8;

    let cardsHtml = '';

    for (let i = 0; i < SKELETON_COUNT; i++) {
        cardsHtml += `
            <div class="group relative bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
                
                <!-- Image Placeholder -->
                <div class="aspect-[4/3] bg-neutral-800/50 relative overflow-hidden shimmer-wrapper">
                    <div class="absolute inset-0 flex items-center justify-center opacity-20">
                        <i data-lucide="image" class="w-12 h-12 text-neutral-600"></i>
                    </div>
                    
                    <!-- Floating Heart Icon (Hidden by default, shows on hover) -->
                    <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button class="p-2 bg-black/50 backdrop-blur rounded-full text-white hover:bg-red-500/20 hover:text-red-500 transition-colors">
                            <i data-lucide="heart" class="w-4 h-4"></i>
                        </button>
                    </div>

                    <!-- AI Badge -->
                    <div class="absolute bottom-3 left-3">
                        <div class="h-6 w-24 bg-black/60 backdrop-blur rounded-md border border-white/10 flex items-center px-2 gap-2">
                            <div class="w-2 h-2 rounded-full bg-neutral-600 animate-pulse"></div>
                            <div class="h-1.5 w-12 bg-neutral-700 rounded"></div>
                        </div>
                    </div>
                </div>

                <!-- Content Area -->
                <div class="p-5">
                    <!-- Title Lines -->
                    <div class="space-y-2 mb-4">
                        <div class="h-4 bg-neutral-800 rounded-md w-full animate-pulse"></div>
                        <div class="h-4 bg-neutral-800 rounded-md w-2/3 animate-pulse"></div>
                    </div>

                    <!-- Metrics Grid -->
                    <div class="grid grid-cols-2 gap-2 mb-4">
                        <div class="p-2 rounded-lg bg-white/5 border border-white/5">
                            <div class="h-2 w-10 bg-neutral-700 rounded mb-2"></div>
                            <div class="h-3 w-8 bg-neutral-600 rounded"></div>
                        </div>
                        <div class="p-2 rounded-lg bg-white/5 border border-white/5">
                            <div class="h-2 w-10 bg-neutral-700 rounded mb-2"></div>
                            <div class="h-3 w-12 bg-neutral-600 rounded"></div>
                        </div>
                    </div>

                    <!-- Footer: Price & Button -->
                    <div class="flex items-center justify-between pt-4 border-t border-white/10">
                        <div class="h-6 w-20 bg-neutral-800 rounded animate-pulse"></div>
                        <button class="text-xs font-bold text-black bg-white hover:bg-neutral-200 px-4 py-2 rounded-lg transition-colors">
                            Analyze
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    grid.innerHTML = cardsHtml;

    // Re-initialize icons for the newly added HTML
    lucide.createIcons();

    // 3. Search Input Focus Effects (Optional JS enhancement)
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('focus', () => {
        searchContainer.classList.add('scale-[1.02]');
    });

    searchInput.addEventListener('blur', () => {
        searchContainer.classList.remove('scale-[1.02]');
    });
});