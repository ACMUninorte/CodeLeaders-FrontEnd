// Example of HOC
export const withCenteredBoxLoading =
  (Component) =>
  ({ loading, ...props }) =>
    loading ? (
      <div>
        <p> Loading... </p>
      </div>
    ) : (
      <Component {...props} />
    );
