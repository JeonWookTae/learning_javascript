

const Instruction = ({title, steps})=>
    <section className={"instruction"}>
        <h2>{title}</h2>
        {step.map(
            (step, i) =>
                <p key={i}>step</p>
        )}
    </section>

export default Instruction