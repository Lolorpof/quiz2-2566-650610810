import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{username}</span>
          <br />
          <span>{commentText}</span>
          <div className="d-flex align-items-center gap-1">
            {likeNum > 0 && <img src="/like.svg" width={20}></img>}
            <span className="text-muted">
              {likeNum > 0 ? likeNum + " คน" : " "}
            </span>
          </div>
        </div>
      </div>

      {
        /* map-loop render Reply component here */
        replies &&
          replies.map((rep) => (
            <Reply
              userImagePath={rep.userImagePath}
              username={rep.username}
              replyText={rep.replyText}
              likeNum={rep.likeNum}
              key={rep.username}
            />
          ))
      }
    </div>
  );
};
