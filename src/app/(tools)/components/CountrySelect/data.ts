export const data = [
  { value: "de", label: "🇩🇪 Germany" },
  { value: "at", label: "🇦🇹 Austria" },
  { value: "ch", label: "🇨🇭 Switzerland" },
  { value: "be", label: "🇧🇪 Belgium" },
  { value: "fr", label: "🇫🇷 France" },
  { value: "dk", label: "🇩🇰 Denmark" },
  { value: "es", label: "🇪🇸 Spain" },
  { value: "se", label: "🇸🇪 Sweden" },
].sort(function (a, b) {
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }
  return 0;
});
