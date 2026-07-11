# Plugin Documentation

The SHOGun GIS client supports a plugin system that allows you to extend the functionality of the client. This document describes how to create and use plugins.

## Overview

Plugins are self-contained modules that can add new features to the SHOGun GIS client. They are configured in the `gis-client-config.js` file and loaded at runtime.

## Configuration

Plugins are configured in the `plugins` array in the `gis-client-config.js` file. Each plugin requires the following properties:

```javascript
plugins: [
  {
    name: 'my-plugin',
    exposedPaths: ['path/to/component'],
    resourcePath: '/plugins/my-plugin'
  }
]
```

### Configuration Properties

- **name**: The unique identifier for the plugin
- **exposedPaths**: Array of paths to components or modules that the plugin exposes
- **resourcePath**: The path where plugin resources are served from

## Creating a Plugin

### Basic Structure

A basic plugin should follow this structure:

```
my-plugin/
├── package.json
├── src/
│   ├── index.ts
│   └── components/
│       └── MyComponent.tsx
└── README.md
```

### Example Plugin

Here's a simple example of a plugin that adds a custom button to the toolbar:

**src/index.ts**
```typescript
import MyCustomButton from './components/MyCustomButton';

export {
  MyCustomButton
};
```

**src/components/MyCustomButton.tsx**
```typescript
import React from 'react';
import { Button } from 'antd';

const MyCustomButton: React.FC = () => {
  const handleClick = () => {
    console.log('Custom button clicked!');
  };

  return (
    <Button
      onClick={handleClick}
      type="primary"
    >
      My Custom Action
    </Button>
  );
};

export default MyCustomButton;
```

### Building the Plugin

Plugins should be built as ES modules that can be dynamically imported. Make sure your `package.json` includes:

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "peerDependencies": {
    "react": "^18.0.0",
    "antd": "^5.0.0"
  }
}
```

## Using Plugins

### Installation

1. Place your plugin in the appropriate directory (e.g., `/plugins/my-plugin`)
2. Configure the plugin in `gis-client-config.js`
3. Reference the plugin components in your application configuration

### Example Configuration

**gis-client-config.js**
```javascript
window.shogunApplicationConfig = {
  plugins: [
    {
      name: 'my-custom-plugin',
      exposedPaths: ['components/MyCustomButton'],
      resourcePath: '/plugins/my-custom-plugin'
    }
  ]
};
```

## Best Practices

1. **Versioning**: Always version your plugins using semantic versioning
2. **Dependencies**: Minimize dependencies and use peer dependencies for common libraries
3. **Documentation**: Include a README.md with usage examples
4. **Testing**: Write unit tests for your plugin components
5. **Naming**: Use descriptive, unique names for your plugins

## Troubleshooting

### Plugin Not Loading

- Verify the `resourcePath` is correct and accessible
- Check browser console for loading errors
- Ensure all `exposedPaths` are valid

### Component Not Rendering

- Verify the component is properly exported from the plugin
- Check for React version compatibility
- Ensure all required peer dependencies are available

## Additional Resources

- [SHOGun Documentation](https://github.com/terrestris/shogun-docker)
- [React Documentation](https://react.dev/)
- [Ant Design Components](https://ant.design/components/overview/)

## Contributing

For more information about contributing plugins, please refer to the [CONTRIBUTING](../CONTRIBUTING) guide.
