export default function Img({ src, name }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <img
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%", // جعل الصورة دائرية
          objectFit: "cover", // لضمان وضوح الصورة وعدم تمددها
          border: "2px solid #cc0db1", // إضافة حد دائري بلون مميز
        }}
        src={src}
        alt={name}
      />
      <span
        style={{
          marginTop: "5px",
          textAlign: "center",
        }}
      >
        {name}
      </span>
    </div>
  );
}
