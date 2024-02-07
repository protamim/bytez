/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdArrowBackIos } from "react-icons/md";
import { LuMinus } from "react-icons/lu";
import { Slider } from "../ui/slider";
import { IoIosSearch } from "react-icons/io";
import SearchInput from "../common/SearchInput";
import { Checkbox } from "@/components/ui/checkbox";

const FilterPanel = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`${
          isOpen ? "-left-8" : "-left-[110%]"
        } fixed overflow-y-auto h-[calc(100vh-56px)] bg-white top-16 z-30 w-full md:w-max lg:w-auto lg:static transition-all ease-in-out duration-500 custom-scrollbar`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="flex space-x-4 items-center ml-5 mt-6 cursor-pointer lg:hidden"
        >
          <span className="text-xl">
            <MdArrowBackIos />
          </span>
          <h4 className="text-xl">Filter</h4>
        </div>
        {/* Accordion */}
        <Accordion className="w-full px-5 mt-8 lg:mt-0" type="multiple" defaultValue={["item-1", "item-2", "item-3"]} collapsible>
          {/* Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger>Price</AccordionTrigger>
            <AccordionContent>
              <div className="relative grid grid-cols-2 items-center gap-x-12 gap-y-6">
                {/* From Input */}
                <div className="space-y-3">
                  <label className="text-lg text-slate-400 block">From</label>
                  <input
                    className="border w-24 py-2 pl-2 rounded-md text-lg"
                    type="text"
                    defaultValue="340"
                  />
                </div>
                {/* Floating Icon */}
                <span className="absolute left-1/2 top-16 -translate-x-1/2 -translate-y-1/2">
                  <LuMinus />
                </span>
                {/* To Input */}
                <div className="space-y-3 text-right">
                  <label className="text-lg text-slate-400 block text-right">
                    To
                  </label>
                  <input
                    className="border w-24 py-2 pl-2 rounded-md text-lg ml-auto"
                    type="text"
                    defaultValue="2505"
                  />
                </div>
                {/* Price Range Slider */}
                <div className="col-span-2">
                  <Slider defaultValue={[350]} max={3000} step={5} />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger>Brand</AccordionTrigger>
            <AccordionContent>
              <div>
                <SearchInput icon={<IoIosSearch />} />
                {/* Brands */}
                <div className="mt-6 space-y-4">
                  {/* Item 1 */}
                  <div className="flex space-x-2 items-center">
                    <Checkbox />
                    <h5 className="text-base font-semibold">
                      Samsung <span className="text-xs font-light">115</span>
                    </h5>
                  </div>
                  {/* Item 2 */}
                  <div className="flex space-x-2 items-center">
                    <Checkbox />
                    <h5 className="text-base font-semibold">
                      Apple <span className="text-xs font-light">110</span>
                    </h5>
                  </div>
                  {/* Item 3 */}
                  <div className="flex space-x-2 items-center">
                    <Checkbox />
                    <h5 className="text-base font-semibold">
                      Xiomi <span className="text-xs font-light">87</span>
                    </h5>
                  </div>
                  {/* Item 4 */}
                  <div className="flex space-x-2 items-center">
                    <Checkbox />
                    <h5 className="text-base font-semibold">
                      Poco <span className="text-xs font-light">108</span>
                    </h5>
                  </div>
                  {/* Item 5 */}
                  <div className="flex space-x-2 items-center">
                    <Checkbox />
                    <h5 className="text-base font-semibold">
                      Honor <span className="text-xs font-light">52</span>
                    </h5>
                  </div>
                  {/* Item 6 */}
                  <div className="flex space-x-2 items-center">
                    <Checkbox />
                    <h5 className="text-base font-semibold">
                      Motorola <span className="text-xs font-light">63</span>
                    </h5>
                  </div>
                  {/* Item 7 */}
                  <div className="flex space-x-2 items-center">
                    <Checkbox />
                    <h5 className="text-base font-semibold">
                      Nokia <span className="text-xs font-light">25</span>
                    </h5>
                  </div>
                  {/* Item 8 */}
                  <div className="flex space-x-2 items-center">
                    <Checkbox />
                    <h5 className="text-base font-semibold">
                      Realme <span className="text-xs font-light">140</span>
                    </h5>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Built-in Memory</AccordionTrigger>
            <AccordionContent>
            <div>
                <SearchInput icon={<IoIosSearch />} />
                {/* Brands */}
                <div className="mt-6 space-y-4">
                  {/* Item 1 */}
                  <div className="flex space-x-2 items-center">
                    <Checkbox />
                    <h5 className="text-base font-semibold">
                      16GB <span className="text-xs font-light">65</span>
                    </h5>
                  </div>
                  {/* Item 2 */}
                  <div className="flex space-x-2 items-center">
                    <Checkbox />
                    <h5 className="text-base font-semibold">
                      32GB <span className="text-xs font-light">85</span>
                    </h5>
                  </div>
                  {/* Item 3 */}
                  <div className="flex space-x-2 items-center">
                    <Checkbox />
                    <h5 className="text-base font-semibold">
                      64GB <span className="text-xs font-light">87</span>
                    </h5>
                  </div>
                  {/* Item 4 */}
                  <div className="flex space-x-2 items-center">
                    <Checkbox />
                    <h5 className="text-base font-semibold">
                      128GB <span className="text-xs font-light">78</span>
                    </h5>
                  </div>
                  {/* Item 5 */}
                  <div className="flex space-x-2 items-center">
                    <Checkbox />
                    <h5 className="text-base font-semibold">
                      256GB <span className="text-xs font-light">22</span>
                    </h5>
                  </div>
                  {/* Item 6 */}
                  <div className="flex space-x-2 items-center">
                    <Checkbox />
                    <h5 className="text-base font-semibold">
                      512 <span className="text-xs font-light">10</span>
                    </h5>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Protection class</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Screen Diagonal</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Screen Type</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Battery Capacity</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default FilterPanel;
