" use server ";

import { supabase } from "@/config/supabase-db-config";

import { currentUser } from "@clerk/nextjs/server";

export async function saveCurrentUser(userDetails: any) {
  try {
    const { data, error } = await supabase
      .from("userprofiles")
      .insert([userDetails]);
    if (error) {
      throw new Error("Error while saving user data");
    }
    return {
      success: true,
      data: data?.[0],
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function getCurrentUser() {
  try {
    const clerkuser = await currentUser();
    const { data, error } = await supabase
      .from("userprofiles")
      .select("*")
      .eq("clerk_user_id", clerkuser?.id);
    if (error) {
      throw new Error("Error while fetching user data");
    }
    const user = data.length > 0 ? data[0] : null;
    //user is found return the user data
    if (user) {
      return {
        success: true,
        data: user,
      };
    }

    //else create a new user, save it to db and return
    const userDetails = {
      name: clerkuser?.firstName + " " + clerkuser?.lastName,
      email: clerkuser?.emailAddresses[0].emailAddress,
      clerk_user_id: clerkuser?.id,
    };

    const response = await saveCurrentUser(userDetails);
    if (response.success) {
      return {
        success:true,
        data:response.data
      };
    }
    throw new Error("Error while saving user data");
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
}
