
const CustomPrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ 
                ...style, 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                width: "40px", 
                height: "40px", 
                background: "rgba(0, 0, 0, 0.5)", 
                borderRadius: "50%", 
                cursor: "pointer",
                color: "white"
            }}
            onClick={onClick}
        >
            &#9664;
        </div>
    );
};

const CustomNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ 
                ...style, 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                width: "40px", 
                height: "40px", 
                background: "rgba(0, 0, 0, 0.5)", 
                borderRadius: "50%", 
                cursor: "pointer",
                color: "white"
            }}
            onClick={onClick}
        >
            &#9654;
        </div>
    );
};

export { CustomPrevArrow, CustomNextArrow };