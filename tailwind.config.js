module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: { "h-90": "90%" },
    },
  },
  plugins: [require("daisyui")],
};
