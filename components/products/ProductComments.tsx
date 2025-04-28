import { Comment } from "@/types/comment";
import { Stars, User2 } from "lucide-react";
import React from "react";

const ProductComments: React.FC<{ comments: Comment[] }> = ({ comments }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
      {comments.length !== 0 ? (
        comments?.map((comment) => {
          return (
            <div
              className="flex bg-white flex-col items-start justify-start gap-3 shadow-sm p-3 rounded-xl"
              key={comment.id + comment.user_email}
            >
              <div className="flex items-center justify-start gap-3">
                <User2
                  size={20}
                  className="bg-primary w-8 h-8 rounded-full text-white p-1"
                />
                {comment.user_email}
                <span className="flex items-center justify-start gap-2 text-primary font-bold">
                  {comment.rate.toLocaleString("fa-IR")}
                  <Stars size={18} />
                </span>
              </div>
              <h6 className="text-lg font-medium">{comment.title}</h6>
              <p>{comment.content}</p>
            </div>
          );
        })
      ) : (
        <span>هیچ نظری برای این محصول ثبت نشده است .!</span>
      )}
    </div>
  );
};

export default ProductComments;
