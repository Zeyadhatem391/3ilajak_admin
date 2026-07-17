interface Props {
  title: string;
  decs: string;
}

function TitlePage({ title, decs }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-3xl font-bold">{title}</p>
      <p>
       {decs}
      </p>
    </div>
  );
}

export default TitlePage;
