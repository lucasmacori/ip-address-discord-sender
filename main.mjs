import { sendIpToDiscord } from "./discord.mjs";
import { readIpv4, writeIpv4 } from "./io.mjs";
import { getIpv4 } from "./ip.mjs";

const previousIpv4 = readIpv4();
const currentIp = await getIpv4();

if (previousIpv4 !== currentIp) {
    writeIpv4(currentIp);
    await sendIpToDiscord(currentIp);
}