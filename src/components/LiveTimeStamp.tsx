"use client";
import ReactTimeAgo from "react-timeago";

type Props = {
  time: string;
};
export default function LiveTimeStamp({ time }: Props) {
  return <ReactTimeAgo date={time} />;
}
