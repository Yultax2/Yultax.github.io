// https://github.com/Mike-Dax/svelte-websockets-example
import type { LanyardData } from "./@types/types";
import { writable, Writable } from "svelte/store";

const storeData = writable() as Writable<LanyardData>;

const socket = new WebSocket("wss://api.lanyard.rest/socket");

socket.addEventListener("open", () => {
  socket.send(
    JSON.stringify({
      op: 2,
      d: {
        subscribe_to_id: "852582281112715284",
      },
    })
  );

  setInterval(() => {
    socket.send(
      JSON.stringify({
        op: 3,
      })
    );
  }, 30000);
});

socket.addEventListener("message", ({ data }) => {
  const {
    t: type,
    d: lanyard,
  }: { t: "INIT_STATE" | "PRESENCE_UPDATE"; d: LanyardData } = JSON.parse(data);

  if (type === "INIT_STATE" || type === "PRESENCE_UPDATE")
    storeData.set(lanyard);
});

export default {
  subscribe: storeData.subscribe,
};
