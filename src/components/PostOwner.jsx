export const PostOwner = ({ p_img, name, s_id, comment, likes }) => {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={p_img}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">
          {name} {s_id}
        </span>
      </div>

      <span>{comment}</span>

      <div className="d-flex align-items-center gap-1">
        {likes > 0 && <img src="/like.svg" width={20}></img>}
        <span className="text-muted">{likes > 0 ? likes + " คน" : ""}</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
};
