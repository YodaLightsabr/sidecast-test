import { Detail } from "@raycast/api";

const markdown = `# Sidecast Test
If you're looking at this, you have successfully sideloaded an extension into Raycast! Congrats!

To remove this extension, run ${"`sidecast purge sidecast-test`"}.`;

export default function main() {
  return <Detail markdown={markdown} />;
}
