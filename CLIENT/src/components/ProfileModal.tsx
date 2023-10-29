import React, { useContext } from "react";
import ReusableModal from "./reusable/ReusableModal";
import { useState } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";
import LoadingCard from "./LoadingCard";
import ButtonWithSlidingInput from "./reusable/ButtonWithSlidingInput";

export default function ProfileModal() {
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("meow");
  }
  const { user } = userContext;

  const updateProfile = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    if (email) {
      formData.append("email", email);
    }
    if (password) {
      formData.append("password", password);
    }

    try {
      const response = await axios.put(
        "http://localhost:4000/updateProfile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setIsLoading(false);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const emptyInputs = email === "" && image === null && password === "";

  return (
    <>
      <ReusableModal id="profileModal">
        {isLoading && <LoadingCard />}
        <div className=" profile-card flex w-72 flex-col items-center justify-center rounded-lg  p-8 bg-white">
          {(!user?.profilePic && (
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                <span className="text-3xl">{user?.username.charAt(0)}</span>
              </div>
            </div>
          )) ||
            (user?.profilePic && (
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img
                    src={
                      image
                        ? URL.createObjectURL(image)
                        : "http://localhost:4000/uploads/profilePicture/" +
                          user?.profilePic
                    }
                    alt="profile"
                  />
                </div>
              </div>
            ))}

          <div className="mb-6 text-center">
            <span className="text-lg font-bold">{user?.username}</span>
            <span className="block text-sm">{user?.email}</span>
          </div>
          <div className="buttons flex flex-col gap-2 w-96">
            <label
              htmlFor="file-input"
              className="mx-auto cursor-pointer rounded bg-slate-100 p-3"
            >
              Update Profile
            </label>
            <input
              id="file-input"
              type="file"
              className="hidden"
              onChange={(e) => {
                if (e.target.files) {
                  setImage(e.target.files[0]);
                }
              }}
            />

            <ButtonWithSlidingInput
              buttonName="Change Email"
              placeholder="New Email"
              value={email}
              onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
              type="email"
            />
            <ButtonWithSlidingInput
              buttonName="Change Password"
              placeholder="New Password"
              value={password}
              onChange={(e) =>
                setPassword((e.target as HTMLInputElement).value)
              }
              type="password"
            />
          </div>
          <div className="save mt-5">
            <button
              className="btn bg-blue-500"
              onClick={updateProfile}
              disabled={emptyInputs}
            >
              save changes
            </button>
          </div>
        </div>
      </ReusableModal>
    </>
  );
}
