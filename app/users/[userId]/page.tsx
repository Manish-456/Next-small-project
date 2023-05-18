import React, { Suspense } from "react";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";

type IProps = {
  userId: number;
};

export async function generateMetadata({ params }: { params: IProps }): Promise<Metadata>{
 const userData : Promise<User> = getUser(params.userId);
 const user : User = await userData;
 return {
  title : `User || ${user.name}`,
  description : `This is the page of ${user?.name}`
 }
}

export default async function page({ params }: { params: IProps }) {
  const userDetails: Promise<User> = await getUser(params?.userId);
  const userPostsData = await getUserPosts(params.userId);
  // const [user, userPosts] = await Promise.all([userDetails, userPostsData]); // this is also a valid way
  const user = await userDetails;
  return <>
  <h2>{user?.name}</h2>
  <p>Hello</p>
  <br />
  <Suspense fallback={<h2>Loading...</h2>}>
  {/* @ts-expect-error Server Component */}
    <UserPosts promise={userPostsData} />
  </Suspense>
  </>;
}
