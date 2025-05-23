document.addEventListener('DOMContentLoaded', function() {
    // Initial theme determination
    let initialGlobalTheme = localStorage.getItem('theme');
    if (!initialGlobalTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      initialGlobalTheme = 'dark';
    } else if (!initialGlobalTheme) {
      initialGlobalTheme = 'light'; // Default to light if no localStorage and no OS preference for dark
    }
    const savedColor = localStorage.getItem('color') || 'blue'; // Default color
  
    // Apply initial/saved preferences
    document.body.className = ''; // Clear any static classes from HTML
    document.body.classList.add(initialGlobalTheme, savedColor);
    updateStylesheet(); // Initial call to load the correct stylesheet
  
    // Set up theme toggle button
    document.getElementById('theme-toggle').addEventListener('click', function() {
      const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.body.classList.remove(currentTheme);
      document.body.classList.add(newTheme);
      
      localStorage.setItem('theme', newTheme);
      updateStylesheet();
    });
  
    // Set up color buttons
    document.querySelectorAll('.color-switches button').forEach(button => {
      button.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        
        document.body.classList.remove('blue', 'purple', 'yellow');
        document.body.classList.add(color);
        
        localStorage.setItem('color', color);
        updateStylesheet();
      });
    });
  
    // Handle window resize for responsive design
    window.addEventListener('resize', updateStylesheet);
  });
  
  function updateStylesheet() {
    const currentThemeMode = document.body.classList.contains('dark') ? 'dark' : 'light';
    const currentBrandColor = document.body.classList.contains('blue') ? 'blue' : 
                            document.body.classList.contains('purple') ? 'purple' : 'yellow';
    const deviceType = getDeviceType();
    
    // Construct the theme identifier based on conventions from config.mjs and $themes.json
    // This should match the 'name' generated by permutateThemes
    const themeIdentifier = `input-${currentBrandColor}-${currentThemeMode}-${deviceType}-output-comp`;
    
    const cssFileName = `/css/_variables-${themeIdentifier}.css`;
    
    const stylesheet = document.getElementById('theme-stylesheet');
    if (stylesheet.getAttribute('href') !== cssFileName) {
      stylesheet.setAttribute('href', cssFileName);
    }
  }
  
  function getDeviceType() {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }