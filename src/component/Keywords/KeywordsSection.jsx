import React, { useState } from "react";

const KeywordsSection = () => {
    const [showAll, setShowAll] = useState(false);

    const keywords = [
        "WOODWORKING", "PAINTING", "DEMOLITION", "GLASSWORK", "LANDSCAPING",
        "CONCRETE", "PAVING", "PLUMBING", "HVAC", "ROOFING",
        "CARPENTRY", "MASONRY", "WATER_PROOFING", "INSULATION", "TILING",
        "ELECTRICAL_INSTALLATION", "STEELWORK", "FIRE_PROTECTION", "SECURITY_SYSTEMS", "INTERIOR_FINISHING",
        "EXTERIOR_FINISHING", "WINDOWS_AND_DOORS", "SIGNAGE", "COMMUNICATION_SYSTEMS", "POWER_GENERATION",
        "ELEVATORS_AND_ESCALATORS", "FABRICATION", "CLEANING", "PEST_CONTROL", "WASTE_MANAGEMENT",
        "SOLAR_INSTALLATION", "EV_CHARGING_STATIONS", "ENERGY_EFFICIENT_LIGHTING", "RAINWATER_HARVESTING", "ECO_FRIENDLY_MATERIALS",
        "GREEN_ROOFING", "LANDSCAPE_DESIGN", "HARDSCAPING", "IRRIGATION_SYSTEMS", "DRAINAGE_SOLUTIONS",
        "LAND_CLEARING", "TREE_CARE", "FENCING", "WALL_CONSTRUCTION", "EARTHWORK",
        "FLOORING", "CEILING_WORK", "PARTITIONING", "CABINETRY", "INTERIOR_DECORATION",
        "EXTERIOR_DECORATION", "LIGHTING_INSTALLATION", "CURTAIN_WALLING", "EXTERIOR_CLADDING", "INSULATION",
        "FOUNDATION_WORK", "FRAMING", "DRYWALL", "PAINT_PREPARATION", "SHEETROCK_INSTALLATION",
        "VENTILATION_SYSTEMS", "AIR_CONDITIONING", "HEATING_SYSTEMS", "ELECTRICAL_WIRING", "LIGHT_FIXTURES",
        "WINDOW_INSTALLATION", "DOOR_INSTALLATION", "SIDING", "GUTTERS", "DRAINAGE_SYSTEMS",
        "ROOF_REPAIR", "TILE_INSTALLATION", "COUNTERTOPS", "CABINET_INSTALLATION", "FAUCETS_AND_FIXTURES",
        "BATHROOM_REMODELING", "KITCHEN_REMODELING", "BASEMENT_REMODELING", "ATTIC_REMODELING", "EXTERIOR_PAINTING",
        "INTERIOR_PAINTING", "DECORATIVE_PAINTING", "FLOOR_REFINISHING", "TERRAZZO", "MARBLE_WORK",
        "GRANITE_WORK", "STONE_MASONRY", "BRICK_MASONRY", "CONCRETE_REPAIR", "EPOXY_FLOORING"
    ];

    const displayedKeywords = showAll ? keywords : keywords.slice(0, 40);

    return (
        <section className="py-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-lg font-semibold mb-4">Keywords</h2>
                <ul className="flex flex-wrap gap-2">
                    {displayedKeywords.map((keyword, index) => (
                        <li key={index}>
                            <button
                                className="text-gray-500 hover:text-gray-700 border border-gray-300 rounded px-3 py-1 text-sm"
                            >
                                {keyword}
                            </button>
                        </li>
                    ))}
                </ul>
                {!showAll && (
                    <div className="mt-4">
                        <button
                            className="text-gray-500 hover:text-gray-700 border border-gray-300 rounded px-3 py-1 text-sm"
                            onClick={() => setShowAll(true)}
                        >
                            See all
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default KeywordsSection;