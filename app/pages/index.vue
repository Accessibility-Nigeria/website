<template>
  <div class="py-10">
    <div class="relative rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center bg-gray-100 mb-12">
      <img src="~/assets/images/homepage-hero-image.jpg" alt="Hero" class="absolute inset-0 w-full h-full object-cover" />
      <div class="relative z-10 text-center text-white p-6 bg-black/30 w-full h-full flex flex-col items-center justify-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Empowering Everyone</h1>
        <p class="text-xl md:text-2xl">Building a more accessible future together.</p>
      </div>
    </div>

    <!-- Style Guide Verification -->
    <UContainer>
        <h2 class="text-3xl font-bold mb-6">Button Style Guide</h2>
        <div class="space-y-8">
            <!-- Primary Section -->
            <div>
                <h3 class="text-xl font-semibold mb-4 text-primary">Primary Variants</h3>
                <div class="flex flex-wrap gap-4 items-center">
                    <UButton color="primary" variant="solid" label="Primary Solid" />
                    <UButton color="primary" variant="outline" label="Primary Outline" />
                    <UButton color="primary" variant="ghost" label="Primary Ghost" />
                    <UButton color="primary" variant="link" label="Primary Link" />
                </div>
            </div>

            <!-- Secondary Section -->
             <div>
                <h3 class="text-xl font-semibold mb-4 text-dark">Secondary Variants</h3>
                <div class="flex flex-wrap gap-4 items-center">
                    <UButton color="secondary" variant="solid" label="Secondary Solid" />
                    <UButton color="secondary" variant="outline" label="Secondary Outline" />
                    <UButton color="secondary" variant="ghost" label="Secondary Ghost" />
                    <UButton color="secondary" variant="link" label="Secondary Link" />
                </div>
            </div>
             <!-- Mobile Menu Button Test -->
             <div>
                <h3 class="text-xl font-semibold mb-4 text-body">Navbar Actions</h3>
                <div class="flex flex-wrap gap-4 items-center bg-gray-100 p-4 rounded">
                   <UButton to="/partner" color="secondary" variant="solid" label="Partner With Us!!" class="rounded-full px-6 py-2.5 font-bold" size="lg" />
                </div>
            </div>
        </div>
    </UContainer>
  </div>
</template>