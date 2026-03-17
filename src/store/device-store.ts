export interface TDevice {
  id: string;
  name: string;
  date: string;
}

export const AllDevices: TDevice[] = Array.from({ length: 40 }, (_, i) => ({
  id: "device-" + i + 1,
  name: `Device ${i + 1}`,
  date: "2026-03-17",
}));
