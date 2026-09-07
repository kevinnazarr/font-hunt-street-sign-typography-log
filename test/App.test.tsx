import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../src/App"

async function fillAdd(user: ReturnType<typeof userEvent.setup>, nickname="Neon Deli", location="Tokyo — Shinjuku 3-chome"){
  await user.type(screen.getByPlaceholderText(/Neon Bodega Script/i), nickname)
  await user.type(screen.getByPlaceholderText(/Corner of 5th/i), location)
  await user.click(screen.getByRole("radio",{name:/^display/i}))
  await user.type(screen.getByPlaceholderText(/Warm, condensed/i), "neon and loud")
  await user.click(screen.getByRole("button",{name:/Add to log/i}))
}
describe("Font Hunt",()=>{
  beforeEach(()=> localStorage.clear())
  it("empty then add appears", async()=>{
    const user=userEvent.setup()
    render(<App/>)
    expect(await screen.findByText(/field log is empty/i)).toBeInTheDocument()
    await fillAdd(user)
    expect(await screen.findByText("Neon Deli")).toBeInTheDocument()
    expect(screen.getByText(/Added to field log/i)).toBeInTheDocument()
  })
  it("validation blocks empty nickname/location", async()=>{
    const user=userEvent.setup()
    render(<App/>)
    await user.click(screen.getByRole("button",{name:/Add to log/i}))
    expect(await screen.findByText(/Nickname is required/i)).toBeInTheDocument()
    expect(await screen.findByText(/Location or context is required/i)).toBeInTheDocument()
  })
  it("filter + delete flow", async()=>{
    const user=userEvent.setup()
    render(<App/>)
    await fillAdd(user,"Neon Deli","Tokyo")
    await fillAdd(user,"Old Library","Berlin")
    await user.selectOptions(screen.getByLabelText(/Filter by style/i), "Display")
    expect(screen.getByText("Neon Deli")).toBeInTheDocument()
    await user.selectOptions(screen.getByLabelText(/Filter by style/i), "Serif")
    expect(screen.queryByText("Neon Deli")).not.toBeInTheDocument()
    await user.selectOptions(screen.getByLabelText(/Filter by style/i), "All")
    await user.click(screen.getByLabelText(/delete neon deli/i))
    expect(await screen.findByText(/Delete this find/i)).toBeInTheDocument()
    await user.click(screen.getByRole("button",{name:/^Delete$/i}))
    expect(screen.queryByText("Neon Deli")).not.toBeInTheDocument()
  })
  it("persists to localStorage", async()=>{
    const user=userEvent.setup()
    const { unmount }=render(<App/>)
    await fillAdd(user,"Persist Me","Kyoto")
    unmount()
    render(<App/>)
    expect(await screen.findByText("Persist Me")).toBeInTheDocument()
  })
})
