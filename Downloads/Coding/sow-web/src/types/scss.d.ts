declare module '*.scss' {
    const content: {
      [className: string]: string;
      gray50: string;
      gray600: string;
      neutral10: string;
      black900: string;
      // Add other variables as needed
    };
    export default content;
  }