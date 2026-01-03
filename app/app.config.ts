export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: [
          'rounded-full font-normal inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75',
          'transition-colors cursor-pointer'
        ]
      },
      variants: {
        size: {
          md: {
            base: 'px-10 py-2.5 text-base gap-2',
          }
        }
      },
      compoundVariants: [
        // Primary Variants
        {
          color: 'primary',
          variant: 'solid',
          class: 'bg-primary text-white hover:bg-primary-dark focus-visible:outline-primary'
        },
        {
          color: 'primary',
          variant: 'outline',
          class: 'ring-1 ring-inset ring-primary text-primary hover:bg-primary/10 focus-visible:ring-primary'
        },
        {
          color: 'primary',
          variant: 'ghost',
          class: 'text-primary hover:bg-primary/10 focus-visible:bg-primary/10'
        },
        {
          color: 'primary',
          variant: 'link',
          class: 'text-primary hover:text-primary-dark underline-offset-4 hover:underline'
        },
        // Secondary Variants (Dark)
        {
          color: 'secondary',
          variant: 'solid',
          class: 'bg-dark text-white hover:bg-gray-900 focus-visible:outline-dark dark:bg-white dark:text-dark dark:hover:bg-gray-100'
        },
        {
          color: 'secondary',
          variant: 'outline',
          class: 'ring-1 ring-inset ring-dark text-dark hover:bg-dark/10 focus-visible:ring-dark dark:ring-white dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-white'
        },
        {
          color: 'secondary',
          variant: 'ghost',
          class: 'text-dark hover:bg-dark/10 focus-visible:bg-dark/10 dark:text-white dark:hover:bg-white/10 dark:focus-visible:bg-white/10'
        },
        {
          color: 'secondary',
          variant: 'link',
          class: 'text-dark hover:text-gray-900 underline-offset-4 hover:underline dark:text-white dark:hover:text-gray-100'
        }
      ]
    }
  }
})