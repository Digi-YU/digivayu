class HeadingGroup {
    constructor(options = {}) {
        this.options = {
            subtitle: '',
            title: '',
            description: '',
            alignment: 'center', // center, start, end
            gap: 'md', // sm, md, lg
            width: '100', // 50, 75, 100
            theme: 'light', // light, dark
            animate: false,
            ...options
        };
    }

    createTemplate() {
        const {subtitle, title, description, alignment, gap, width, theme, animate} = this.options;
        
        return `
            <div class="heading-group text-${alignment} gap-${gap} w-${width} ${theme === 'dark' ? 'text-white' : ''} ${animate ? 'animate' : ''}">
                ${subtitle ? `<h4 class="font-body fw-bold">${subtitle}</h4>` : ''}
                ${title ? `<h2 class="font-display fw-bold display-5">${title}</h2>` : ''}
                ${description ? `<p class="font-body">${description}</p>` : ''}
            </div>
        `;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.createTemplate();
        }
    }
}

export default HeadingGroup; 