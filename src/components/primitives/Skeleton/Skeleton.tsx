import classes from "./Skeleton.module.css";

type SkeletonProps = {
  width?: number;
  height?: number;
};

const Skeleton = ({ width, height }: SkeletonProps) => {
  return (
    <div className={classes.root} style={{ width: width, height: height }} />
  );
};

export default Skeleton;
